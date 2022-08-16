import Document, { Html, Head, Main, NextScript } from "next/document";

class Mydocuments extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <div id="overlay"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Mydocuments;
