import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const SearchWithDropdown = ({setFilterText}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
  return (
    <div>
      <div className='border w-70 relative rounded-md flex justify-between items-center  '>
        <input type="text" className='border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:px-4 w-full py-2 px-4' placeholder='Filter Timeline'
        onClick={()=>setIsDropdownOpen(true)}
        
        />
        <div className='absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-1 cursor-pointer'>
        {
          isDropdownOpen ? (
            <span className='text-2xl'><IoIosArrowDown onClick={()=>setIsDropdownOpen(false)} />
            <ul className='absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg'>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => setFilterText('All')}>All</li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => setFilterText('Call')}>Call</li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => setFilterText('Text')}>Text</li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => setFilterText('Video')}>Video</li>
            </ul>
            </span>
          ) : (
            <span className='text-2xl'><IoIosArrowUp onClick={()=>setIsDropdownOpen(true)} /></span>
          )  

        }
          
         
        </div>
      </div>
   
    </div>
  )
}

export default SearchWithDropdown
