import { Car } from 'lucide-react';
import React, { Suspense } from 'react'
import Cards from './Cards';





const View = () => {
  
  return (
    <div>
     <Suspense fallback={<div>Loading...</div>}>
      <Cards />
     </Suspense>

      
    </div>
  )
}

export default View
