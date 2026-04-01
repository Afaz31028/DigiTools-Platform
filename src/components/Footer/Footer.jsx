import React from 'react';
import { CiInstagram } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='md:px-50 md:pt-30 p-7 bg-[#101727] text-white '>
            <div className='flex flex-col md:flex-row gap-6 md:justify-between items-center'>
                <div>
                    <h1 className='text-4xl font-bold'>DigiTools</h1>
                    <p className='mt-4 text-slate-400 font-normal'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <h1>Product</h1>
                        <p className='text-gray-400 mt-4'>Features</p>
                        <p className='text-gray-400 mt-4'>Pricing</p>
                        <p className='text-gray-400 mt-4'>Templates</p>
                        <p className='text-gray-400 mt-4'>Integrations</p>
                    </div>
                    <div>
                        <h1>Company</h1>
                        <p className='text-gray-400 mt-4'>About</p>
                        <p className='text-gray-400 mt-4'>Blog</p>
                        <p className='text-gray-400 mt-4'>Careers</p>
                        <p className='text-gray-400 mt-4'>Press</p>
                    </div>
                    <div>
                        <h1>Resources</h1>
                        <p className='text-gray-400 mt-4'>Documentation</p>
                        <p className='text-gray-400 mt-4'>Help Center</p>
                        <p className='text-gray-400 mt-4'>Community</p>
                        <p className='text-gray-400 mt-4'>Contact</p>
                    </div>
                </div>
                <div>
                    <h1>Social Links</h1>
                    <div className='flex gap-3 mt-4'>
                        <div className='p-2 w-8 h-8 bg-white rounded-full'>
                            <CiInstagram className='text-black' />
                        </div>
                        <div className='p-2 w-8 h-8 bg-white rounded-full'>
                            <FaFacebook className='text-black' />
                        </div>
                        <div className='p-2 w-8 h-8 bg-white rounded-full'>
                            <FaSquareXTwitter className='text-black' />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-20 text-gray-600' />
            <div className='flex flex-col md:flex-row justify-between items-center mt-7 text-gray-500'>
                <div>
                    <p>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex gap-5'>
                    <p>Privacy Policy</p>
                    <p>Terms of Services</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;