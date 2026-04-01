import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Feature = ({feature}) => {
    return (
        <div>
            <div className='flex gap-2 items-center'>
                <FaCheck className="text-green-400"/>
                <p className='text-[16px] font-medium text-gray-500'>{feature}</p>
            </div>
        </div>
    );
};

export default Feature;