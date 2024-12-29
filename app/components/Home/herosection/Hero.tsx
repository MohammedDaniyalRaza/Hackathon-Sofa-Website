import React from 'react'
import Companies from './Companies'
import FeaturedProduct from './FeaturedProduct'
import TopCetegorySection from './TopCetegorySection'
import PopularStyleSection from './PopularStyleSection'
import OurProduct from './OurProduct'
import Footer from './Footer'
// import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='bg-white min-w-full h-96 relative'>
        <div className='m-auto w-[1500] h-[800] bg-[#F0F2F3] border-radius'>
          <div className=''>
            <div className='w-[599] h-[400] mt-[0.5] relative top-[250] radius left-[80]'>
              <div className='text-[0.9rem] font-medium text-gray-800 ml-1'>
                WELCOME &nbsp; TO &nbsp; CHAIRY
              </div>
              <div className="font-bold text-6xl mt-4">
                <span>
                    Best Furniture
                    Collection For Your
                    Interior.
                </span>
              </div>

              <div className='relative top-[69]'>
                <span className='text-[#757575] bg-[#029FAE] p-4 rounded-lg cursor-pointer'>
                  <button>Shop Now</button>
                  <span className='ml-4'>→</span>
                </span>
              </div>
            </div>

            <div className='w-[800]'>
            <div className='relative left-[900] bottom-[250]'>
                <img src="heroproduct.png" alt="image not found" height={"auto"} width={"auto"}/>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Companies />
      </div>
      <div>
        <FeaturedProduct/>
      </div>
      <div>
        <TopCetegorySection/>
      </div>
      <div>
        <PopularStyleSection/>
      </div>

      <div>
        <OurProduct/>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Hero