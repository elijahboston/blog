import { NextPage } from 'next'
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  createHttpLink,
  ApolloProvider
} from '@apollo/client'
import { SANITY_ENDPOINT } from '~/constants/api'

export const getApolloClient = (
  ctx?: any,
  initialState?: NormalizedCacheObject
) => {
  const httpLink = createHttpLink({
    uri: SANITY_ENDPOINT,
    fetch
  })
  const cache = new InMemoryCache().restore(initialState || {})
  return new ApolloClient({
    link: httpLink,
    cache
  })
}

export const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(null, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  )
}
