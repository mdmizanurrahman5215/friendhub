import React, { use, useState } from 'react'
import Card from './ui/Card';
import StatsCard from './ui/StatsCard';
import Modal from './compound/Modal';


const dataPromise = fetch("/data.json").then((res) => res.json());


const Cards = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser);
  
      const data = use(dataPromise);
      console.log(data);
    
  return (
   <>
   <div className='container mx-auto'>
    <div className='grid grid-cols-4 items-center gap-4 py-10'>
      <StatsCard title="Total Friends" value = "10"          />
      <StatsCard title="Mutual Friends" value = "5"          />
      <StatsCard title="Online Friends" value = "3"          />
      <StatsCard title="Pending Requests" value = "2"          />
    </div>
     <h1 className='text-3xl font-bold mb-10'>Your Friends</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto '>
    
      {
        data.map((item) => <Card key={item.id} data={item} onClick={() => setSelectedUser(item) }
         />)

      }
     
    </div>
     {
        selectedUser && (
          <Modal user = {selectedUser} onClose={() => setSelectedUser(null)} />
        )
      }
     </div>
   </>
  )
}

export default Cards
