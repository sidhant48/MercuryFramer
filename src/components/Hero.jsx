import React from "react";
import { FaApple } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      {/* White background for the left side (extended to cover 15% more) */}
      <div className="absolute top-0 left-0 w-2/3 h-full bg-white rounded-l-md"></div>

      {/* Gradient background for the right half with rounded edges */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #AAF7F3 30%, #FFFF8C, #A3A3FF, #8BEEF1 )",
        }}
      ></div>

      {/* Navigation Options */}
      <div className="text-black py-4 text-center absolute top-0 left-0 w-full">
        <div className="container mx-auto">
          <nav className="flex justify-center space-x-4">
            <a href="#" className="hover:text-black">
              Product
            </a>
            <a href="#" className="hover:text-gray-300">
              Compare
            </a>
            <a href="#" className="hover:text-gray-300">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Left Section (Image) */}
      <div className="absolute left-8 top-0 h-full w-3/5">
        {/* Add your image component or placeholder */}
        <img
          className=" object-cover"
          src="https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg"
          alt="Hero Image"
        />
        <div className="bg-white text-black-500 rounded-full border border-black-500 py-2 px-4 mt-12 text-center w-64">
          Financial Management
        </div>
        <div className="text-black text-left mt-2 ml-5">
          <div className="text-8xl font-medium py-2">A simpler,</div>
          <div className="text-8xl font-medium py-2">smarter basic</div>
          <div className="text-8xl font-medium py-2">
            credit{" "}
            <span className="bg-gradient-to-r from-indigo-200 to-sky-600 bg-clip-text text-transparent">
              card.
            </span>
          </div>
          <h5 className="py-4">
            Your powerful companion on the road to financial success! Explore
            personal budget management, investment opportunities.
          </h5>
          <div className="flex space-x-4 py-4 rounded-md">
            <button className="bg-black text-white rounded-full px-6 py-3 mr-4 mb-4 w-90 flex items-center">
              <div className="flex items-center">
                <FaApple className="mr-2" />
                <span>App Store</span>
              </div>
            </button>
            <div className="rounded-full overflow-hidden border-2 border-grey-500 mb-4">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSF7QlooX_M8PJrJi9YyDldhNCux1j9zASBw7S7w60TvAm8NqHs" // Replace with your image URL
                alt="Image 1"
                className="w-16 h-16 object-cover"
              />
            </div>
            <div className="rounded-full overflow-hidden border-2 border-grey-500 mb-4">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSkDrFqlZEMTZdJbAOmSihucLzDh2n13QwhJmFL4s8Uy1D_HdIq" // Replace with your image URL
                alt="Image 1"
                className="w-16 h-16 object-cover"
              />
            </div>
            <div className="rounded-full overflow-hidden border-2 border-grey-500 mb-4">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSsPkk0e8FRxlEx-i1IF5yw7xS5mAtvn0XLDXu4kw_74YuR0x90" // Replace with your image URL
                alt="Image 1"
                className="w-16 h-16 object-cover"
              />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="mb-0">24K+</h1>
              <h1>Active User</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Login and Button) */}
      <div className="absolute top-0 right-0 p-4">
        <button className="bg-gradient-to-r from-indigo-200 AAF7F3 to-transparent text-black-500 rounded-full px-6 py-2 mr-4 mb-4 hover:bg-black hover:text-white">
          Login
        </button>
        <button className="bg-black text-white rounded-full px-6 py-2 mb-4">
          <div className="flex items-center">
            <span>Let's Talk</span>
            <MdOutlineArrowOutward className="mr-2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
