import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import "../styles/variables.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Practice App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
