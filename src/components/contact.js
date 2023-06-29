import React from 'react'
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'

const ContactInfo = (props) => {
    return (
        <div>
            <p className='text-[#DBEAFE] font-bold text-xl'>Contact: {props.name} ({props.desig})</p>
            <p className='text-[#DBEAFE] text-xl'>Email: {props.email}</p>
        </div>
    )
}

export const SocMedia = () => {
    return (
        <div>
            <div className='flex justify-between my-16 text-[#5658DD]'>
                <FaFacebookF size={20} className='hover:text-[#DBEAFE] cursor-pointer' />
                <FaLinkedinIn size={20} className='hover:text-[#DBEAFE] cursor-pointer' />
                <FaTwitter size={20} className='hover:text-[#DBEAFE] cursor-pointer' />
                <FaInstagram size={20} className='hover:text-[#DBEAFE] cursor-pointer' />
            </div>
        </div>
    )
}

export default ContactInfo;