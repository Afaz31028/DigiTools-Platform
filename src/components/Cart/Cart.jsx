import React from 'react';
import DisplayCartPackages from './DisplayCartPackages';

const Cart = ({choosePackage, setChoosePackage}) => {
    // console.log(choosePackage)
    return (
        <div>
            <div className='max-w-9/12 mx-auto'>
                <h1>Your Cart</h1>
                <div>
                   {
                        choosePackage.map((selectedPackage, index)=> <DisplayCartPackages key={index} selectedPackage={selectedPackage} choosePackage={choosePackage} setChoosePackage={setChoosePackage}></DisplayCartPackages> )
                   }
                </div>
            </div>
        </div>
    );
};

export default Cart;