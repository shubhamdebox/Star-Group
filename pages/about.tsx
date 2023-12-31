import Info from "@/components/Info";
import Colagecontainer from "@/components/Colagecontainer";
import Center from "@/components/reusable/Center";
import Toprightcorner from "@/components/reusable/Toprightcorner";
import Bottom from "@/components/reusable/Bottom";
import Timeline from "@/components/Timeline";
import Csr from "@/components/Csr";
import client from "@/utils/apolloClient";
import { gql } from "@apollo/client";
import Head from "next/head";
import Team2 from "@/components/Team2";
import Bottomline from "@/components/reusable/Bottomline";
import Homegridcon from "@/components/Homegridcon";

export default function about({ data }: any) {
  return (
    <>
      <div className="">
        <Head>
          <title>{`About Star Group | Our Mission, Vision & Values`}</title>
          <meta
            name="description"
            content="Discover the history of Star Group, our mission, vision, and the core values that guide us. Learn how we are making a difference across multiple sectors."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className=" md:mt-[6rem] ">
          <Info
            title="About Us"
            // description="Discover the Story Behind Our Success."
            description="Star Group is an amalgamation of flourishing endeavors that span across various sectors. 
            We pride ourselves on our diverse portfolio, ranging from high-end hotels like Star Nest, Holiday Inn Express, and Hilton, to IT staffing via American Star Alliance, and leading cosmetology services with StarGlow Salons."
          ></Info>
          <div className="relative">
            <Toprightcorner />
            <Center />
            <Colagecontainer></Colagecontainer>
            
          </div>
          <div className="relative">
          <Center />
          <Homegridcon />
        </div>
          <div className="relative">
            <Bottom />
            {/* <Team value={data}/> */}
            <Team2 value={data} />
          </div>
          <Csr />
          <div className="relative">
            <div className="hidden md:block">
              <Toprightcorner />
              <Bottomline />
            </div>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query teams {
        teams {
          name
          designation
          linkedInUrl
          shortDescription
          profileImage {
            url
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
      data: data,
    },
  };
}
