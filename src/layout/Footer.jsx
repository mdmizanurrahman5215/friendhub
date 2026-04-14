import React from 'react'
import ModalFooter from '../components/compound/Footer'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#244D3F] py-10 mt-10'>
    <ModalFooter className='container mx-auto'>
      <ModalFooter.Section title="FriendHub">
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
      </ModalFooter.Section>
      <ModalFooter.Section className='mb-10'>
        <h1 className='text-2xl font-semibold mb-2'>Social Links</h1>
        <div className='flex justify-center items-center gap-2'>
          <span className='text-3xl'><FaInstagramSquare /></span>
          <span className='text-3xl'><FaFacebookSquare /></span>
          <span className='text-3xl'><BsTwitterX /></span>
        </div>
      </ModalFooter.Section>
      
      <ModalFooter.Bottom>
       <div className='flex justify-between border-t border-gray-200 pt-10 w-full'>
        <p> &copy; 2024 FriendHub. All rights reserved.</p>
        <ul className='flex items-center gap-6'>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>    
        </ul>
       </div>
      </ModalFooter.Bottom>
    </ModalFooter>
    </div>
  )
}

export default Footer
