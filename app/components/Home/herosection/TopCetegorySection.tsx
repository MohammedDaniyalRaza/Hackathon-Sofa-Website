import React from 'react'

const TopCetegorySection = () => {
  return (
    <>
        <div className=''>
            <div className='min-w-full h-[200] relative top-[800]'>
                <div className='ml-[29rem] mb-10'>
                    <h1 className='font-semibold text-4xl'>Top Categories</h1>
                    <div className='absolute'>
                        <div className='grid grid-cols-3 gap-3 items-center'>
                            <div className='mt-8'>
                            <img src="categorie1.png" alt="Image Not FOund" className='h-[27.5rem] w-[30rem]'/>
                            <span className='my-color'>
                                <h1 className='text-white font-semibold text-xl ml-[20px] mt-[15px]'>Wing Chair</h1>
                                <p className='text-gray-400 ml-[20px] mt-[1px]'>3,584 Products</p>
                            </span>
                            </div>
                            <div className='mt-8'>
                            <img src="categorie2.png" alt="Image Not Found" className='h-[27.5rem] w-[30rem]' />
                            <span className='my-color'>
                                <h1 className='text-white font-semibold text-xl ml-[20px] mt-[15px]'>Wooden Chair</h1>
                                <p className='text-gray-400 ml-[20px] mt-[1px]'>157 Products</p>
                            </span>
                            </div>
                            <div className='mt-8'>
                            <img src="categorie3.png" alt="Image Not Found" className='h-[27.5rem] w-[30rem]'/>
                            <span className='my-color'>
                                <h1 className='text-white font-semibold text-xl ml-[20px] mt-[15px]'>Desk Chair</h1>
                                <p className='text-gray-400 ml-[20px] mt-[1px]'>154 Products</p>
                            </span>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default TopCetegorySection