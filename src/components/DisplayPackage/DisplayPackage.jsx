import React from "react";
import Feature from "./Feature";
import Cart from "../Cart/Cart";

const DisplayPackage = ({packageData, choosePackage, setChoosePackage}) => {

  const buyPackage=(packageData)=>{
    const newPackage= [...choosePackage, packageData]
    setChoosePackage(newPackage)
  }
  return (
    <div>
      <div>
        <div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex justify-end">
                  <span className="badge badge-xs bg-amber-200 p-2 py-3 rounded-3xl text-md font-extrabold text-amber-800">
                    {packageData.tag}
                  </span>
                </div>
                <div className="">
                    <span className="text-4xl">{packageData.icon}</span>
                </div>
                <h1 className="text-2xl font-bold mt-4">{packageData.name}</h1>
                <p className="text-gray-500 mt-4">{packageData.description}</p>
                <div className="flex items-center text-xl mt-4">
                  <span className="font-bold">${packageData.price}</span><span className="text-gray-500 font-medium">/{packageData.period}</span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-xs">
                  {
                    packageData.features.map((feature, index)=> <Feature key={index} feature={feature}></Feature>)
                  }
                </ul>
                <div className="mt-4">
                  <button onClick={()=>{buyPackage(packageData)}} className="btn btn-block text-gray-300 rounded-4xl bg-linear-to-br from-[#4F39F6] to-[#9514FA]">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPackage;
