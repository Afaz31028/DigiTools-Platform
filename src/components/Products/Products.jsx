import React from "react";
import DisplayPackage from "../DisplayPackage/DisplayPackage";

const Products = ({ packagesData, choosePackage, setChoosePackage, bill, setBill }) => {
  // console.log(packagesData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-7 justify-center items-center">
        {packagesData.map((packageData) => (
          <DisplayPackage
            key={packageData.id}
            packageData={packageData}
            choosePackage={choosePackage}
            setChoosePackage={setChoosePackage}
            bill={bill}
            setBill={setBill}
          ></DisplayPackage>
        ))}
      </div>
    </div>
  );
};

export default Products;
