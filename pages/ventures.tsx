import Info from '@/components/Info'
import VentureDiv from '@/components/VentureDiv'
import Gallery from '@/components/Gallery'
import client from '@/utils/apolloClient'
import { gql } from '@apollo/client'
import Head from 'next/head'

export default function ventures({ data, data2 }: any) {
  return (
    <>
      <div>
        <Head>
          <title>{`Our Ventures | Star Group's Diverse Portfolio`}</title>
          <meta
            name="description"
            content="Browse Star Group's range of successful ventures across hospitality, housing, and more. Witness the innovation and excellence that unify our diverse portfolio."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="md:mt-[6rem]">
          <Info title="Ventures"
            description="Explore the Diverse Businesses within Star Group's Portfolio."></Info>
        </div>
        <VentureDiv value={data2} />
        <Gallery value={data} />
      </div>
    </>
  )
}

export async function getStaticProps() {

  const { data, error } = await client.query({
    query: gql`
    query MyQuery {
      galleries {
        venture {
          ventureName
        }
        image {
          url
        }
      }
    }    
    `,
  });

  const { data: data2 } = await client.query({
    query: gql`
    query MyQuery {
      ventures {
        ventureName
        websiteUrl
        venturestatus
        mainImage {
          url
        }
        about
        location
        title
      }
    }
    `,
  });


  if (!data || !data2) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      data2: data2
    },
  };
}

