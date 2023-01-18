import { ApolloProvider } from '@apollo/client';
import {SessionProvider} from 'next-auth/react';
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.css";
import Script from 'next/script';
import {client} from "../graphql/apollo-client";

export default function App({ Component, pageProps: {session , ...pageProps} }: AppProps) {
  return(
  <>
  <ApolloProvider client={client}>
    <SessionProvider session={session}>
    <Component {...pageProps} />
    </SessionProvider>
  </ApolloProvider>
  <Script src="bootstrap/dist/js/bootstrap"/>
  </> 
  );
}
