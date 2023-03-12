import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavbarDesktop() {
  return (
    <div className="hidden lg:flex bg-white  items-center shadow-[0_13px_36px_30px_rgba(83,20,153,0.06)] h-20 rounded-3xl	mt-10 px-2">
      <nav className=" h-full w-4/5">
        <ul className="flex items-center justify-evenly  h-full">
          <li>
            <Link to="/" className="flex items-center">
              <img className="ml-2" src="./Images/IconNavBar/Home.svg" alt="" />
              <p className="">صفحه اصلی</p>
            </Link>
          </li>
          <li>
            <div className=" group  py-7 flex items-center cursor-pointer relative z-[100]">
              <img
                className="ml-2"
                src="./Images/IconNavBar/category.svg"
                alt=""
              />
              <p className="group-hover:text-Saina">خدمات ساینا</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2 group-hover:rotate-180 group-hover:text-Saina"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
              
             


              <ul className="absolute  hidden group-hover:block  w-48 top-16  shadow bg-white  rounded-2xl">
                <li className="border-b-[1px] group/item border-Saina  p-2  ">
                  <div className="flex items-center justify-between">
                    <p className="group-hover/item:text-Saina">
                      زیبایی و جوانسازی
                    </p>

                   
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover/item:-rotate-90 group-hover/item:text-Saina">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                   </svg>

                  </div>
                  <ul className="hidden group-hover/item:block absolute w-48 -top-[.5px] right-48  shadow bg-white  rounded-2xl">
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      تزریق بوتاکس
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      تزریق فیلر
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      تزریق پلاسماژل
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      زاویه سازی صورت
                    </li>
                    <li className="  p-2 hover:text-Saina ">
                      فرم دهی بینی با ژل
                    </li>
                  </ul>
                </li>
                <li className="border-b-[1px] group/item2 border-Saina p-2">
                  <div className="flex items-center justify-between">
                    <p className="group-hover/item2:text-Saina">خدمات مو</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover/item2:-rotate-90 group-hover/item2:text-Saina">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                   </svg>
                  </div>
                  <ul className="hidden group-hover/item2:block absolute w-48 -top-[.5px] right-48  shadow bg-white  rounded-2xl">
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      کاشت ابرو
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      کاشت طبیعی مو
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      مزوتراپی مو
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      کاشت مژه
                    </li>
                    <li className="  p-2 hover:text-Saina ">پی ار اف</li>
                  </ul>
                </li>
                <li className="  group/item3  p-2">
                  <div className="flex items-center justify-between">
                    <p className="group-hover/item3:text-Saina">
                      لیزر موهای زائد
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover/item3:-rotate-90 group-hover/item3:text-Saina">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                   </svg>
                  </div>
                  <ul className="hidden group-hover/item3:block absolute w-48 -top-[.5px] right-48  shadow bg-white  rounded-2xl">
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      لیزر موهای زائد
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      لیزر پالومار وکتوس
                    </li>
                    <li className="border-b-[1px] border-Saina  p-2 hover:text-Saina ">
                      لیزر موهای زائد پا
                    </li>
                    <li className="  p-2 hover:text-Saina ">
                      لیزر موهای زائد صورت
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/" className="flex items-center">
              <img
                className="ml-2"
                src="./Images/IconNavBar/file text.svg"
                alt=""
              />
              <p className="">وبلاگ</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center">
              <img className="ml-2" src="./Images/IconNavBar/_.svg" alt="" />
              <p className="">سوالات متداول</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center">
              <img
                className="ml-2"
                src="./Images/IconNavBar/Users.svg"
                alt=""
              />
              <p className="">درباره ما</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="bg-Saina text-white flex items-center p-2 rounded-2xl ">
        <input
          className="bg-transparent placeholder:text-white outline-0 "
          type="text"
          placeholder="جست و جو "
        />
        <AiOutlineSearch className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}
