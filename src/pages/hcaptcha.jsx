import Head from 'next/head'
import Script from 'next/script'

export default function Hcaptcha() {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="Perish LLC" content="Captcha" />

        <title>Nautilus Captcha</title>
      </Head>

      <Script src="https://hcaptcha.com/1/api.js" />

      <div className="bg-[#ff9966] h-full">
        <div className="h-14" />
        <div className="flex justify-center flex-col">
          <form action="?" method="POST" style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ transform: "scale(1)" }} className="h-captcha" data-sitekey="cac707e7-c1fb-4336-afc4-e5b282f20daa" data-size="normal" data-callback="captchaCallback" data-theme="dark" />
          </form>
          <div className="h-14 " />
          <button onClick={() => {
            if (typeof CloseWebView !== 'undefined') {
              CloseWebView.postMessage('')
            }
          }} className="self-center w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Close
          </button>
        </div>
      </div>

      <Script
        dangerouslySetInnerHTML={{
          __html: `
          function captchaCallback(response) {
            if (typeof Captcha !== 'undefined') {
              Captcha.postMessage(response)
            }
          }`,
        }} />

    </>
  )
}
