import withApollo from "next-with-apollo"
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import { SANITY_API_URL } from "config/api"
import { getDataFromTree } from "@apollo/client/react/ssr"

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      connectToDevTools: process.env.NODE_ENV === "production" ? false : true,
      cache: new InMemoryCache().restore(initialState || {}),
      link: new HttpLink({
        uri: SANITY_API_URL,
      }),
    })
  },
  {
    getDataFromTree,
  }
)(App)
