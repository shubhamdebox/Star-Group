import Info from '@/components/Info'
import Colagecontainer from '@/components/Colagecontainer'
import Team from '@/components/Team'
import Center from '@/components/reusable/Center'
import Toprightcorner from '@/components/reusable/Toprightcorner'
import Bottom from '@/components/reusable/Bottom'
import Timeline from '@/components/Timeline'
import Csr from '@/components/Csr'



export default function about() {

  return (
    <>
      <div className=''>
        <div className="mt-[6rem] md:mt-[8rem] ">
          <Info title="About Us"
            description="With the explosion of data in recent years, businesses are looking for ways to process and analyze vast amounts of data in real time. At Ventois, we have the expertise and state-of-the-art technology necessary to help businesses develop and implement big data platforms that can handle even the most complex data sets."></Info>
          <div className='relative'>
            <Toprightcorner />
            <Center />
            <Colagecontainer></Colagecontainer>
          </div>
          <div className='relative'>
            <Bottom />
            <Team />

          </div>
          <Csr />
          <div className='relative'>
            <div className='hidden md:block'>
              <Toprightcorner/>
             <Center />
             </div>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  )
}


