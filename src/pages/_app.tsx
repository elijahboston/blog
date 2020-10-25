import "styles/tailwind.css"
import "styles/fonts.css"
import "styles/cube.css"
import { useApollo } from "lib/apollo-client"
import { ApolloProvider } from "@apollo/client"
import { useRouter } from "next/dist/client/router"

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
