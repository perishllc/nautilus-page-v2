import Head from 'next/head'
import { useEffect } from 'react';

export default function Promo() {
  
  useEffect(() => {
    window.location.replace("https://app.nautilus.io/gz6sZxOKQub");
  } , []);

  return (
    <>
      <Head>
        <title>Nautilus Promo</title>
      </Head>
    </>
  )
}
