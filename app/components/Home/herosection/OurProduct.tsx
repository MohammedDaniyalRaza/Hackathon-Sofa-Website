import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const OurProduct = () => {
  return (
    <>
        <div>
            <div className='min-w-full h-[200] relative top-[1800]'>
                <div className=' mb-10'>
                    <h1 className='font-semibold text-4xl text-center'>Our Products</h1>
                </div>
                <div className='m-auto w-[1500] h-[200]'>
                    <div className='grid grid-cols-4 items-center gap-10 ml-[3rem]'>
                        <div>
                            <span className='absolute ml-3 mt-2 bg-[#01AD5A] text-white text-xs pt-1 pb-1 pl-2 pr-2 rounded-lg'>New</span>
                            <img src="img1.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='text-[#007580] mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#029FAE] text-white text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                        <div>
                            <span className='absolute ml-3 mt-2 bg-[#F5813F] text-white text-xs pt-1 pb-1 pl-2 pr-2 rounded-lg'>Sales</span>
                            <img src="img2.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#F0F2F3] text-black text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                        <div>
                            <img src="img3.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#F0F2F3] text-black text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                        <div>
                            <img src="img4.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#F0F2F3] text-black text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                        <div>
                            <span className='absolute ml-3 mt-2 bg-[#01AD5A] text-white text-xs pt-1 pb-1 pl-2 pr-2 rounded-lg'>New</span>
                            <img src="categorie1.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='text-[#007580] mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#F0F2F3] text-black text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                        <div>
                            <span className='absolute ml-3 mt-2 bg-[#F5813F] text-white text-xs pt-1 pb-1 pl-2 pr-2 rounded-lg'>Sales</span>
                            <img src="categorie4.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#F0F2F3] text-black text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                        <div>
                            <img src="categorie5.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#F0F2F3] text-black text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                        <div>
                            <img src="img1.png" alt="Image Not Found" className='max-h-80'/>
                            <div>
                                <p className='mt-3 font-normal'>Library Stool Chair</p>
                                <span className='font-bold text-xl'>20$</span>
                            </div>
                            <div className='relative left-64 -top-10 w-12 p-3 rounded-lg bg-[#F0F2F3] text-black text-xl'>
                                <CiShoppingCart className='items-center cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default OurProduct