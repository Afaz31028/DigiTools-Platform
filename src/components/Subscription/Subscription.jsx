import React from "react";
import { FaCheck } from "react-icons/fa";

const Subscription = () => {
  return (
    <div className="px-40 py-30">
      <div className="text-center mx-auto">
        <h1 className="text-5xl font-extrabold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400 mb-10">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="mx-auto mb-10">
        <div className="grid grid-cols-3 items-center">
          <div className="card w-96 bg-base-100 shadow-md">
            <div className="card-body">
                <h1 className="text-2xl font-bold">Starter</h1>
                <p className="text-gray-400">Perfect for getting started</p>
                <div className="flex items-center">
                    <span className="text-3xl font-bold">$0</span>
                    <span className="text-xl text-gray-400">/Month</span>
                </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs w-[332px] h-[160px]">
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Access to 10 free tools</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Basic templates</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Community support</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>1 project per month</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-block text-gray-300 rounded-4xl bg-linear-to-br from-[#4F39F6] to-[#9514FA]">Get Started Free</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-sm bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-base-100">
            <p className="absolute -top-3 left-35 font-bold bg-amber-100 text-amber-600 px-2 rounded-3xl">Most Popular</p>
            <div className="card-body">
                <h1 className="text-2xl font-bold">Pro</h1>
                <p className="text-gray-300">Best for professionals</p>
                <div className="flex items-center">
                    <span className="text-3xl font-bold">$29</span>
                    <span className="text-xl text-gray-300">/Month</span>
                </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs w-[332px] h-[160px]">
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Access to all premium tools</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Unlimited templates</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Priority support</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Unlimited projects</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Cloud sync</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-block rounded-4xl bg-base-100 text-indigo-400 font-bold">Start Pro Trial</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                <h1 className="text-2xl font-bold">Enterprise</h1>
                <p className="text-gray-400">For teams and businesses</p>
                <div className="flex items-center">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="text-xl text-gray-400">/Month</span>
                </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs w-[332px] h-[160px]">
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Team collaboration</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Custom integrations</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Dedicated support</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>SLA guarantee</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-400"/>
                  <span>Custom branding</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-block text-gray-300 rounded-4xl bg-linear-to-br from-[#4F39F6] to-[#9514FA]">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
