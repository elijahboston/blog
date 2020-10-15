import { GetServerSidePropsContext, NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { LayoutPost } from "components/layouts/LayoutPost"
import { initializeApollo } from "lib/apollo-client"
import { usePostQuery } from "hooks/use-post"
import { getQueryParam } from "util/get-query-param"
import { GET_POST } from "queries/get-post"
import BlockContent from "@sanity/block-content-to-react"
import { SANITY_PROJECT_ID, SANITY_DATASET } from "constants/api"

import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript"
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco"

SyntaxHighlighter.registerLanguage("javascript", js)

const PostPage: NextPage<{}> = () => {
  const { query } = useRouter()
  const { slug } = query

  const { data } = usePostQuery({ slug: getQueryParam(slug) })
  const post = data.allPost[0]

  const serializers = {
    types: {
      block: (props) => {
        switch (props.node.style) {
          case "normal":
            return <p className="font-body text-base my-4">{props.children}</p>
          default:
            return BlockContent.defaultSerializers.types.block(props)
        }
      },
      codeSnippet: (props) => {
        return (
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            customStyle={{
              padding: "1rem",
            }}
            codeTagProps={{
              className: "text-sm",
            }}
          >
            {props.node.snippet.code}
          </SyntaxHighlighter>
        )
      },
    },
    list: (props) => {
      return (
        <ul className="list-disc list-inside m-4 font-body">
          {props.children}
        </ul>
      )
    },
    listItem: (props) => {
      return BlockContent.defaultSerializers.listItem(props)
    },
  }
  return (
    <LayoutPost>
      <h1 className="font-display">{post.title}</h1>
      {/* {post.author && <div className="py-6">By {post.author.name}</div>} */}
      <BlockContent
        blocks={post.bodyRaw}
        projectId={SANITY_PROJECT_ID}
        dataset={SANITY_DATASET}
        serializers={{
          marks: {
            code: (props) => (
              <code className="bg-white text-black p-1">{props.children}</code>
            ),
          },
          types: {
            block: (props) => {
              switch (props.node.style) {
                case "normal":
                  return (
                    <p className="font-body text-base my-4">{props.children}</p>
                  )
                default:
                  return BlockContent.defaultSerializers.types.block(props)
              }
            },
            codeSnippet: (props) => {
              return (
                <SyntaxHighlighter
                  language="javascript"
                  style={docco}
                  customStyle={{
                    padding: "1rem",
                  }}
                  codeTagProps={{
                    className: "text-sm",
                  }}
                >
                  {props.node.snippet.code}
                </SyntaxHighlighter>
              )
            },
          },
          list: (props) => {
            return (
              <ul className="list-disc list-inside m-4 font-body">
                {props.children}
              </ul>
            )
          },
          listItem: (props) => {
            return BlockContent.defaultSerializers.listItem(props)
          },
        }}
      />
    </LayoutPost>
  )
}

export default PostPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const { slug } = ctx.query

  const { data, error } = await apolloClient.query({
    query: GET_POST,
    variables: {
      slug: getQueryParam(slug),
    },
  })

  if (!data || error) {
    ctx.res.statusCode = 404
    ctx.res.end()
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    //revalidate: 1,
  }
}
