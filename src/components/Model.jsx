import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Model = () => {
  return (
    <div>
        <div className='absolute inset-x-0 top-[15%] text-center'>
        <h1 className='text-3xl '>Model 3</h1>
        <p>From $29,740*</p>
        <p className='p-2 text-sm'>After <span className='underline underline-offset-4'>Federal Tax Credit & Est. Gas Savings</span></p>
        </div>
        <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
            <button className='bg-[#f4f4f6] rounded-md w-96 lg:w-64 lg: mx-4 h-10 mt-2 text-black'>Existing Inventory</button>
            <button className='bg-[#393c41] rounded-md w-96 lg:w-64 lg: mx-4 h-10 mt-2 text-white'>Custom Order</button>
        </div>
        <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]'>
            <AiOutlineArrowDown size={25} />
        </div>
    </div>
  )
}

export default Model;