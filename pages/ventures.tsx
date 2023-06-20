import Info from '@/components/Info'
import Colagecontainer from '@/components/Colagecontainer'
import Team from '@/components/Team'
import VentureDiv from '@/components/VentureDiv'
import Gallery from '@/components/Gallery'
import client from '@/utils/apolloClient'
import { gql } from '@apollo/client'

export default function ventures({ data }: any) {
  return (
 <>
 <div>
 <div className="mt-[6rem] md:mt-[8rem]">
 <Info  title="Ventures"
        description="With the explosion of data in recent years, businesses are looking for ways to process and analyze vast amounts of data in real time. At Ventois, we have the expertise and state-of-the-art technology necessary to help businesses develop and implement big data platforms that can handle even the most complex data sets."></Info>
 </div>
   <VentureDiv/>
   <Gallery value={data}/>
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