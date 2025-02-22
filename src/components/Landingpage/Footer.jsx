/** @format */

import React from "react";

function Footer() {
  return (
    <footer className=" pt-18 pb-10">
      <div className="container wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-[40px]">
        {/* Company Section */}
        <div>
          <h2 className="text-xl mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 transition text-l mb-[20px]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 transition text-l mb-[20px]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 transition text-l mb-[20px]">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 transition text-l">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl mb-4">QUICK LINKS</h2>
          <p className="text-gray-400 text-l mb-[20px]">Terms & Conditions</p>
          <p className="text-gray-400 text-l">Privacy Policy</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl mb-4">SOCIAL MEDIA</h2>
          <div className="flex flex-col sm:flex-col sm:space-x-4">
            <a href="#" className="text-gray-400 transition text-l mb-[20px] ">
              Youtube
            </a>
            <a href="#" className="text-gray-400 transition text-l mb-[20px] ">
              Facebook
            </a>
            <a href="#" className="text-gray-400 transition text-l mb-[20px] ">
              X
            </a>
            <a href="#" className="text-gray-400 transition text-l mb-[20px] ">
              Instagram
            </a>
            <a href="#" className="text-gray-400 transition text-l ">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Available Platforms Section */}
        <div>
          <h2 className="text-xl mb-4">AVAILABLE PLATFORMS</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-400 text-l mb-[20px]">AppStore</span>
            </li>
            <li>
              <span className="text-gray-400 text-l">PlayStore</span>
            </li>
          </ul>
        </div>
      </div>
<hr className="wrapper border-t border-[#E2E8F0]"/>
      <div className="text-left text-gray-400 text-sm wrapper pt-[20px]">
        © {new Date().getFullYear()} Wrapp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
