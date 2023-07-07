import Hero from "@/components/Hero";
import client from "@/utils/apolloClient";
import { gql } from "@apollo/client";
import Homegridcon from "@/components/Homegridcon";
import Services from "../components/Services";
import Topline from "../components/reusable/Topline";
import Bottomline from "@/components/reusable/Bottomline";
import Toprightcorner from "@/components/reusable/Toprightcorner";
import Center from "@/components/reusable/Center";
import Map from "../components/Map";
import Head from "next/head";
import Homeinfo from "@/components/Homeinfo";
import Solution from "@/components/Solution";

export default function Home({ data, data2 }: any) {
  return (
    <>
      <Head>
        <title>{`Star Group | Leading Ventures in Hospitality, IT Staffing, and More`}</title>
        <meta
          name="description"
          content="Explore Star Group's diverse portfolio of ventures spanning hospitality,IT Staffing, Cosmetology and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="md:mt-[5rem] mt-16 ">
        <div className="relative">
          
          <Toprightcorner />
          <Center />
          <Bottomline />
          <Hero data={data} />
        </div>
        
        
        <Services />
        <Solution data={data2}/>
        <div className="relative">
          <Toprightcorner />
          <Map value={data2} />
        </div>
      </div>
    </>
  );
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

  const { data: data2 } = await client.query({
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

  if ((!data && error) || !data2) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      data2: data2,
    },
  };
}
