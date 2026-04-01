import React, { use, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";

const Package = ({packagesPromise}) => {
    const packagesData= use(packagesPromise);
    const [changeTab, setChageTab]= useState(false);
    const [choosePackage, setChoosePackage]= useState([]);
    const [bill, setBill]=useState(0);
    // console.log(choosePackage)

    const changeState=()=>{
      setChageTab(prev => !prev);

    }
    // console.log(packagesData)
  return (
    <div className="mt-30 max-w-9/12 mx-auto mb-30">
         <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
          <p className="mt-4">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
          <div className="flex justify-center items-center font-bold mt-5">
            <button onClick={changeState} className={`btn rounded-l-xl rounded-r-none p-5 ${!changeTab ? "bg-linear-to-br from-[#4F39F6] to-[#9514FA] && text-base-100" : "text-neutral-900"}  text-base-200`}>
              Products
            </button>
            <button onClick={changeState}  className={`btn rounded-l-none rounded-r-xl p-5 ${changeTab ? "bg-linear-to-br from-[#4F39F6] to-[#9514FA] && text-base-100" : "text-neutral-900"}  `}>
              Cart ({choosePackage.length})
            </button>
          </div>
        </div>

        {!changeTab ? <Products packagesData={packagesData} choosePackage={choosePackage} setChoosePackage={setChoosePackage} bill={bill} setBill={setBill}></Products> : <Cart choosePackage={choosePackage} setChoosePackage={setChoosePackage} bill={bill} setBill={setBill}></Cart>}
    </div>
  );
};

export default Package;
