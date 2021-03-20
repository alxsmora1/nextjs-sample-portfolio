import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>  
    <Head>
        <title>React Sample Portfolio</title>
        <meta charSet="utf-8" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" /> 
    </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
