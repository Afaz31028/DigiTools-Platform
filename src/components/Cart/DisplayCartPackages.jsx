import React from 'react';
import { MdDelete } from 'react-icons/md';

const DisplayCartPackages = ({selectedPackage,choosePackage, setChoosePackage, bill, setBill}) => {

    const filterPackages=(selectedPackage)=>{
        const newPackages= choosePackage.filter(newPackage => newPackage.name != selectedPackage.name)
        setChoosePackage(newPackages)
        setBill(bill - Number(selectedPackage.price))
    }
    // console.log(selectedPackage)
    return (
        <div>
            <div className='border-2 border-lime-500 rounded-3xl flex justify-between items-center px-5 py-3'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <span className='text-4xl'>{selectedPackage.icon}</span>
                    </div>
                    <div>
                        <h3 className='text-[20px] font-semibold'>{selectedPackage.name}</h3>
                        <p className='text-gray-400'>${selectedPackage.price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>{filterPackages(selectedPackage)}}><MdDelete className='text-3xl text-red-600' /></button>
                </div>
            </div>
    
        </div>
    );
};

export default DisplayCartPackages;