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

export const SocMediaPanel = () => {
    return (
        <div className='pb-3'>
            <ul className='flex text-[#5658DD]'>
                <li className='px-2'>
                    <a className="p-2 flex" href="https://www.facebook.com/iedccet/">
                        <FaFacebookF size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
                <li className='px-2'>
                    <a className="p-2 flex" href="https://www.linkedin.com/company/innovation-and-entrepreneurship-development-cell-cet/mycompany/">
                        <FaLinkedinIn size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
                <li className='px-2'>
                    <a className="p-2 flex" href="https://mobile.twitter.com/iedccet">
                        <FaTwitter size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
                <li className='px-2'>
                    <a className="p-2 flex" href="https://www.instagram.com/iedc_cet/?hl=en">
                        <FaInstagram size={20} className='hover:text-[#ACADFF] cursor-pointer mx-auto' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export const Footer = () => {
    return (
        <div className='py-24 w-fit mx-auto'>
            <SocMediaPanel />
            <p className='text-[#9CA9B3] text-[10px] text-center mt-5'>Made by IEDC CET. All Rights Reserved.</p>
        </div>
    )
}

const ContactPanel = () => {
    return (
        <div className="bg-[#5658DD] px-4 py-12 flex flex-col gap-5 w-full justify-around font-[Inter] text-center min-[450px]:flex-row min-[450px]:w-fit sm:text-left sm:px-12 sm:py-16">
          <ContactInfo name="Rizvan MS" desig="CEO" email="ceoiedc@cet.ac.in" />
          <ContactInfo name="Treasa Mariya" desig="PRO" email="proiedc@cet.ac.in" />
        </div>
    )
}

export default ContactPanel;