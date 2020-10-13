import "styles/tailwind.css"
import "styles/fonts.css"
import "styles/the-cube.css"
import { useApollo } from "lib/apollo-client"
import { ApolloProvider } from "@apollo/client"

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
