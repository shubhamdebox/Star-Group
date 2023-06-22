import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import localFont from 'next/font/local';
const techsans = localFont({ src: '../public/Technique+Sans.otf', weight: "400" },)

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div className={`${techsans.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </div>
    </>
  )
}
