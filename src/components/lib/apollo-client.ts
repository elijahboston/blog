import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'
import { SANITY_ENDPOINT } from '~/constants/api'

let apolloClient

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: SANITY_ENDPOINT, // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPost: concatPagination()
          }
        }
      }
    })
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo<ApolloClient<NormalizedCacheObject>>(
    () => initializeApollo(initialState),
    [initialState]
  )
  return store
}
