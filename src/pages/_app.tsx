import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  ) 
  
}
