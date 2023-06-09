import { AppProps } from 'next/app';
import '../styles/globalS.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }