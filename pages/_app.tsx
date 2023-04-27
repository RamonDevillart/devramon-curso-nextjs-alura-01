import GlobalStyle from '@/theme/GlobalStyle';
import App from 'next/app';
import Head from 'next/head';

export default function MyApp({Component, pageProps}) {
    return (
      <>
        <Head>

        {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KNHM77D5R3"></script>
<script dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-KNHM77D5R3');`
}} />


          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
}