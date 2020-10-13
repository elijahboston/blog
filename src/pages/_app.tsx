import "styles/tailwind.css"
import "styles/fonts.css"
import "styles/the-cube.css"
import { useApollo } from "lib/apollo-client"
import { ApolloProvider } from "@apollo/client"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/dist/client/router"

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      {/* <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
        > */}
      <Component {...pageProps} />
      {/* </motion.div>
      </AnimatePresence> */}
    </ApolloProvider>
  )
}

export default App
