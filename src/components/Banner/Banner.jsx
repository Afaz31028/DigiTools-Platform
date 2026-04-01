import React from "react";
import bannerImg from "../../assets/banner.png";
import bannerIcon from "../../assets/bannerIcon.png";
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
  return (
    <div className="mx-auto px-50 py-15">
      <div className="flex justify-between items-center">
        <div className="max-w-160">
          <div className="inline-block bg-indigo-200 rounded-3xl text-[#9514FA] mb-4">
            <div className="flex gap-1 items-center px-2 py-1">
                <img src={bannerIcon} alt="" />
                <p className="font-semibold">New: AI-Powered Tools Available</p>
            </div>
          </div>
          <h3 className="font-extrabold text-7xl">
            Supercharge Your Digital Workflow
          </h3>
          <p className="text-gray-500 mt-4">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
          </p>
          <div className="flex gap-3 items-center mt-8">
            <button className="btn rounded-3xl bg-[#9514FA] text-base-200">Explore Products</button>
            <div className="flex gap-2 items-center btn rounded-3xl text-[#9514FA] border-[#9514FA]">
                <CiPlay1/>
                <p>Watch Demo</p>
            </div>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="Banner_Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
