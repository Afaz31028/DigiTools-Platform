import React from 'react';
import stepImg1 from '../../assets/user.png'
import stepImg2 from '../../assets/package.png'
import stepImg3 from '../../assets/rocket.png'


const AccountSteps = () => {
    return (
        <div>
            <div className='px-50 py-30 text-center'>
                <h1 className='text-5xl font-extrabold mb-4'>Get Started in 3 Steps</h1>
                <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
                <div className='flex justify-between items-center mt-10'> 
                    <div className='w-[380px] h-[380px] shadow-lg p-6 rounded-2xl'>
                        <div className='flex justify-end'>
                            <span className='p-1 w-8 h-8 text-center bg-indigo-600 rounded-full text-base-100'>01</span>
                        </div>
                        <div className='w-20 h-20 mt-7 bg-fuchsia-100 flex justify-center items-center rounded-full mx-auto'>
                            <img src={stepImg1} alt="" srcset="" />
                        </div>
                        <h3 className='text-2xl font-bold mt-4'>Create Account</h3>
                        <p className='text-gray-400 font-normal mt-4'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='w-[380px] h-[380px] shadow-lg p-6 rounded-2xl'>
                        <div className='flex justify-end'>
                            <span className='p-1 w-8 h-8 text-center bg-indigo-600 rounded-full text-base-100'>02</span>
                        </div>
                        <div className='w-20 h-20 mt-7 bg-fuchsia-100 flex justify-center items-center rounded-full mx-auto'>
                            <img src={stepImg2} alt="" srcset="" />
                        </div>
                        <h3 className='text-2xl font-bold mt-4'>Choose Products</h3>
                        <p className='text-gray-400 font-normal mt-4'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='w-[380px] h-[380px] shadow-lg p-6 rounded-2xl'>
                        <div className='flex justify-end'>
                            <span className='p-1 w-8 h-8 text-center bg-indigo-600 rounded-full text-base-100'>03</span>
                        </div>
                        <div className='w-20 h-20 mt-7 bg-fuchsia-100 flex justify-center items-center rounded-full mx-auto'>
                            <img src={stepImg3} alt="" srcset="" />
                        </div>
                        <h3 className='text-2xl font-bold mt-4'>Start Creating</h3>
                        <p className='text-gray-400 font-normal mt-4'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSteps;