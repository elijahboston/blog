import withApollo from "next-with-apollo"
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import { SANITY_API_URL } from "config/api"
import { getDataFromTree } from "@apollo/client/react/ssr"
import "styles/tailwind.css"
import "styles/fonts.css"

const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
)

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      connectToDevTools: !(process.env.NODE_ENV === "production"),
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
