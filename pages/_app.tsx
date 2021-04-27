import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Head from "next/head";

// Custom Theme
import Theme from "../theme";

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <title>HelloWebDev</title>
        <link
          rel="shortcut icon"
          href={require("../asset/img/logo.png")}
          type="image/png"
        />
      </Head>
      <ChakraProvider theme={Theme}>
        <ColorModeProvider
          options={{
            initialColorMode: "dark",
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
