import React from 'react'
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram} from 'react-icons/fa'

const ContactInfo = (props) => {
    return (
        <div className='flex flex-col'>
            <p className='text-blue-100 font-semibold text-xl mb-1'>Contact: {props.name} ({props.desig})</p>
            <p className='text-blue-100 text-xl mb-1'>Email: {props.email}</p>
        </div>
    )
}

export const SocMedia = () => {
    return (
        <div>
            <div className='flex justify-between my-16 text-[#5658DD]'>
                <FaFacebookF size={20} className='hover:text-[#ACADFF] cursor-pointer' />
                <FaLinkedinIn size={20} className='hover:text-[#ACADFF] cursor-pointer' />
                <FaTwitter size={20} className='hover:text-[#ACADFF] cursor-pointer' />
                <FaInstagram size={20} className='hover:text-[#ACADFF] cursor-pointer' />
            </div>
        </div>
    )
}

export default ContactInfo;