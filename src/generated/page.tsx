import * as Types from './graphql'

import * as Operations from './graphql'
import { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type React from 'react'
import { getApolloClient } from '../components/withApollo'
import type { NormalizedCacheObject } from '@apollo/client'
export async function getServerPageGetPost(
  options: Omit<Apollo.QueryOptions<Types.GetPostQueryVariables>, 'query'>,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.GetPostQuery>({
    ...options,
    query: Operations.GetPostDocument
  })

  const apolloState = apolloClient.cache.extract()

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null
    }
  }
}
export const useGetPost = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetPostQuery, Types.GetPostQueryVariables>
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.GetPostDocument, options)
}
export type PageGetPostComp = React.FC<{
  data?: Types.GetPostQuery
  error?: Apollo.ApolloError
}>
export const withPageGetPost = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetPostQuery, Types.GetPostQueryVariables>
) => (WrappedComponent: PageGetPostComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  const { data, error } = useQuery(Operations.GetPostDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />
}
export const ssrGetPost = {
  getServerPage: getServerPageGetPost,
  withPage: withPageGetPost,
  usePage: useGetPost
}
export async function getServerPageGetPosts(
  options: Omit<Apollo.QueryOptions<Types.GetPostsQueryVariables>, 'query'>,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx)

  const data = await apolloClient.query<Types.GetPostsQuery>({
    ...options,
    query: Operations.GetPostsDocument
  })

  const apolloState = apolloClient.cache.extract()

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null
    }
  }
}
export const useGetPosts = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetPostsQuery, Types.GetPostsQueryVariables>
) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  return useQuery(Operations.GetPostsDocument, options)
}
export type PageGetPostsComp = React.FC<{
  data?: Types.GetPostsQuery
  error?: Apollo.ApolloError
}>
export const withPageGetPosts = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.GetPostsQuery, Types.GetPostsQueryVariables>
) => (WrappedComponent: PageGetPostsComp): NextPage => (props) => {
  const router = useRouter()
  const options = optionsFunc ? optionsFunc(router) : {}
  const { data, error } = useQuery(Operations.GetPostsDocument, options)
  return <WrappedComponent {...props} data={data} error={error} />
}
export const ssrGetPosts = {
  getServerPage: getServerPageGetPosts,
  withPage: withPageGetPosts,
  usePage: useGetPosts
}
