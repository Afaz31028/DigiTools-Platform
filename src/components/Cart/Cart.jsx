import React from 'react';
import DisplayCartPackages from './DisplayCartPackages';

const Cart = ({choosePackage, setChoosePackage, bill, setBill}) => {
    // console.log(choosePackage)
    const handleCheckOut=()=>{
        setBill(0)
        setChoosePackage([]);
    }
    
    return (
        <div>
            <div className='max-w-10/12 mx-auto shadow-lg p-5'>
                <h1 className='text-2xl font-bold'>Your Cart</h1>
                <div className=' mt-6 space-y-5'>
                   {
                        choosePackage.map((selectedPackage, index)=> <DisplayCartPackages key={index} selectedPackage={selectedPackage} choosePackage={choosePackage} setChoosePackage={setChoosePackage} bill={bill} setBill={setBill}></DisplayCartPackages> )
                   }
                </div>
                <div className='flex justify-between items-center mt-3'>
                    <div>
                        <h3>Total:</h3>
                    </div>
                    <div>
                        {bill}
                    </div>
                </div>
                <div className='max-w-11/12 mx-auto mt-6 bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-center p-2 rounded-2xl text-white'>
                    <button onClick={()=>handleCheckOut()}>Proceed to CheckOut</button>
                </div>
                
            </div>
        </div>
    );
};

export default Cart;