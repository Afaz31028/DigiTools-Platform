import React from 'react';
import { MdDelete } from 'react-icons/md';

const DisplayCartPackages = ({selectedPackage,choosePackage, setChoosePackage}) => {

    const filterPackages=(selectedPackage)=>{
        const newPackages= choosePackage.filter(newPackage => newPackage.name != selectedPackage.name)
        setChoosePackage(newPackages)
    }
    // console.log(selectedPackage)
    return (
            <div className='bg-gray-300 rounded-3xl flex justify-between items-center p-5'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <span className='text-4xl'>{selectedPackage.icon}</span>
                    </div>
                    <div>
                        <h3 className=''>{selectedPackage.name}</h3>
                        <p>${selectedPackage.price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>{filterPackages(selectedPackage)}}><MdDelete className='text-3xl' /></button>
                </div>
            </div>
    );
};

export default DisplayCartPackages;