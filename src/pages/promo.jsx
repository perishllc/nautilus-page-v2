import Head from 'next/head'
import { useEffect } from 'react';

export default function Promo() {
  
  useEffect(() => {
    window.location.replace("https://app.nautilus.io/7WpBkuKFnyb");
  } , []);

  return (
    <>
      <Head>
        <title>Nautilus Promo</title>
      </Head>
    </>
  )
}
