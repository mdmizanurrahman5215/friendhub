import React, { use } from 'react'
import Card from './ui/Card';

const dataPromise = fetch("/data.json").then((res) => res.json());


const Cards = () => {
      const data = use(dataPromise);
      console.log(data);
    
  return (
   <>
   <div className='container mx-auto'>
     <h1 className='text-3xl font-bold mb-10'>Your Friends</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto '>
    
      {
        data.map((item) => <Card key={item.id} data={item} />)

      }
    </div>
     </div>
   </>
  )
}

export default Cards
