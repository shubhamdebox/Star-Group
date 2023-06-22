import Hero from '@/components/Hero'
import client from '@/utils/apolloClient'
import { gql } from '@apollo/client'
import Homegridcon from '@/components/Homegridcon'
import Services from '../components/Services'
import Topline from '../components/reusable/Topline'
import Bottomline from '@/components/reusable/Bottomline'
import Toprightcorner from '@/components/reusable/Toprightcorner'
import Center from '@/components/reusable/Center'
import Map from "../components/Map"
import Head from 'next/head'

export default function Home({ data , data2 }: any) {
  return (
    <>
     <Head>
        <title>{`Star-Group Home`}</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='md:mt-[8rem] mt-24 '>
        <div className='relative'>
          <Topline/>
          <Toprightcorner/>
          <Center/>
          <Bottomline/>
          <Hero data={data} />
        </div>
        <Homegridcon />
        <Services />
        <Map value={data2}/>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const { data, error } = await client.query({
    query: gql`
      query MyQuery {
          heroes {
            images {
              images {
                url
              }
            }
          }
        }
    `,
  });

  const { data : data2  } = await client.query({
    query: gql`
    query MyQuery {
      ventures {
        ventureName
        venturestatus
        websiteUrl
        location
        mainImage {
          url
        }
        about
        geolocation {
          latitude
          longitude
        }
        id
      }
    }
    `,
  });

  if (!data && error || !data2) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      data2 : data2
    },
  };
}
