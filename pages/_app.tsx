import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import localFont from 'next/font/local';
import { LazyMotion, domAnimation, m,  } from 'framer-motion';
import router, { useRouter } from 'next/router';
const techsans = localFont({ src: '../public/Technique+Sans.otf', weight: "400" },)

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, [])

  const variants = {
    fadeIn: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    inactive: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    fadeOut: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };


  const router = useRouter()
  const { category } = router.query;

  return (
    <>
      <div className={`${techsans.className}`}>
        <Layout>
          <LazyMotion features={domAnimation}>
            {category != null ? <>
              <Component {...pageProps} />
            </> : <>
            <m.div
              key={router.asPath}
              variants={variants}
              initial="fadeIn"
              animate="inactive"
              exit="fadeOut"
            >
              <Component {...pageProps} />
              </m.div>
            </>}
            
          </LazyMotion>
        </Layout>
      </div>
    </>
  )
}
