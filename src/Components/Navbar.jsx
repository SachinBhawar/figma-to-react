import React from "react";
import search from "../Assets/Component32.svg";
import filter from "../Assets/Component39.svg";

const Navbar = () => {
    return (
        <div className="box-border flex flex-row gap-[30px] items-center">
            <div className="h-[80px] bg-white w-[260px] rounded-[10px] flex flex-row items-center pl-[35px] ">
                <h className="text-2xl font-serif">LOGO</h>
            </div>
            <div className="h-[80px] bg-white w-[620px] rounded-[10px] flex flex-row items-center px-[30px]">
                <img src={search} className="h-[20px] w-[20px] box-border "></img>
                <input
                    className="my-4 hover:border-0 outline-0 active:border-0 box-border mx-[6px]  w-[457px] text-xs"
                    type="text"
                    placeholder="Search here..."
                    onChange={() => {}}
                />
                <img src={filter} className="h-[26px] w-[26px] box-border mr-[9px]"></img>
                <label htmlFor="" className="text-[#303030]">
                    Filters
                </label>
            </div>
            <button className="h-[80px] bg-[#88C2BB] w-[260px] rounded-[10px] text-white cursor-pointer">
                Become a Seller
            </button>
        </div>
    );
};

export default Navbar;
