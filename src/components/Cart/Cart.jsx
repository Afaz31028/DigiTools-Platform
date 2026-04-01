import React from 'react';
import DisplayCartPackages from './DisplayCartPackages';
import { toast } from 'react-toastify';
import { IoCartOutline } from 'react-icons/io5';

const Cart = ({choosePackage, setChoosePackage, bill, setBill}) => {
    // console.log(choosePackage)
    const handleCheckOut=()=>{
        setBill(0);
        setChoosePackage([]);
        toast.success("Successfully Checkout!")
    }
    
    return (
        <div>
            <div className='max-w-10/12 mx-auto shadow-lg p-5'>
                <h1 className='text-2xl font-bold'>Your Cart</h1>
                {choosePackage.length==0 ? 
                        <div className='flex justify-center items-center p-10'>
                            <div>
                                <IoCartOutline className='text-9xl text-gray-400' />
                                <p className='text-gray-400'>Your Cart is Empty</p>
                            </div>
                        </div>

                    :
                    
                    <>
                        <div className=' mt-6 space-y-5'>
                        {
                            choosePackage.map((selectedPackage, index)=> <DisplayCartPackages key={index} selectedPackage={selectedPackage} choosePackage={choosePackage} setChoosePackage={setChoosePackage} bill={bill} setBill={setBill}></DisplayCartPackages> )
                        }
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <div>
                                <h3 className='text-xl'>Total:</h3>
                            </div>
                            <div>
                                <span className='text-xl font-bold'>${bill}</span>
                            </div>
                        </div>
                        <div className='max-w-11/12 mx-auto mt-6 bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-center p-2 rounded-2xl text-white'>
                            <button onClick={()=>handleCheckOut()}>Proceed to CheckOut</button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Cart;