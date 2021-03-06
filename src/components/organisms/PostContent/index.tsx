import { SANITY_PROJECT_ID, SANITY_DATASET } from '~/constants/api'
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/xonokai'
import BlockContent from '@sanity/block-content-to-react'
import dynamic from 'next/dynamic'
import { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import { NONAME } from 'dns'

const PrismHightlight = dynamic<SyntaxHighlighterProps>(() =>
  import('react-syntax-highlighter').then((mod) => mod.PrismAsyncLight)
)

export interface PostContentProps {
  bodyRaw: string
}

export const PostContent: React.FC<PostContentProps> = ({ bodyRaw }) => {
  return (
    <BlockContent
      blocks={bodyRaw}
      projectId={SANITY_PROJECT_ID}
      dataset={SANITY_DATASET}
      serializers={{
        marks: {
          code: (props) => <code className='font-body'>{props.children}</code>
        },
        types: {
          block: (props) => {
            switch (props.node.style) {
              case 'normal':
                return (
                  <p className='font-body text-body text-bodyTextColor my-4'>
                    {props.children}
                  </p>
                )
              default:
                return BlockContent.defaultSerializers.types.block(props)
            }
          },
          codeSnippet: (props) => {
            return (
              <PrismHightlight
                language='javascript'
                style={theme}
                customStyle={{
                  padding: '1rem',
                  border: 'none',
                  margin: '2rem 0'
                }}
                codeTagProps={{
                  className: 'text-sm'
                }}
              >
                {props.node.snippet.code}
              </PrismHightlight>
            )
          }
        },
        list: (props) => {
          return (
            <ul className='list-disc list-inside m-4 font-body'>
              {props.children}
            </ul>
          )
        },
        listItem: (props) => {
          return BlockContent.defaultSerializers.listItem(props)
        }
      }}
    />
  )
}
