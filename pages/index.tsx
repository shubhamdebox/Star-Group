import Image from 'next/image'
import { Inter, Manrope } from 'next/font/google'
import Info from '@/components/Info'
import Colagecontainer from '@/components/Colagecontainer'
import Team from '@/components/Team'
import Hero from '@/components/Hero'
import client from '@/utils/apolloClient'
import { gql } from '@apollo/client'
import Homegridcon from '@/components/Homegridcon'
import Services from '../components/Services'
import Topline from '../components/reusable/Topline'
import Bottomline from '@/components/reusable/Bottomline'
import Toprightcorner from '@/components/reusable/Toprightcorner'
import Center from '@/components/reusable/Center'

export default function Home({ data }: any) {
  return (
    <>
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

  if (!data && error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data
    },
  };
}
