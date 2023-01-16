import {SessionProvider} from 'next-auth/react';
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.css";
import Script from 'next/script'

export default function App({ Component, pageProps: {session , ...pageProps} }: AppProps) {
  return(
  <>
  <SessionProvider session={session}>
   <Component {...pageProps} />
  </SessionProvider>
  <Script src="bootstrap/dist/js/bootstrap"/>
  </> 
  );
}
