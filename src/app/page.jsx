

import Areachart from '@/components/Areachart'
import CardList from '@/components/CardList'
import Chart from '@/components/Chart'
import React from 'react'
const page = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4' >
     <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 '> <Chart /></div>
      <div className='bg-primary-foreground p-4 rounded-lg '>
        <CardList title="Latest Transactions" />
      </div>
       <div className='bg-primary-foreground p-4 rounded-lg '>Test</div>
        <div className='bg-primary-foreground p-4 rounded-lg '>Test</div> 
        <div className='bg-primary-foreground p-4 rounded-lg  lg:col-span-2 xl:col-span-1 2xl:col-span-2 '> <Areachart/> </div> 
        <div className='bg-primary-foreground p-4 rounded-lg '> <CardList title="Popular Content" /></div> 
       
    </div>
  )
}

export default page