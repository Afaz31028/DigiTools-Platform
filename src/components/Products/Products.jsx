import React from "react";
import DisplayPackage from "../DisplayPackage/DisplayPackage";

const Products = ({ packagesData, choosePackage, setChoosePackage, bill, setBill }) => {
  console.log(packagesData);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 justify-center items-center">
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
