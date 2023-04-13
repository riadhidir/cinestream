import { useQuery } from "@tanstack/react-query";
import search_icon from "../assets/right-arrow.svg";
import axios from "axios";
import { useState } from "react";

function Searchbar() {
    return (
        <div className="flex w-3/4 h-12 bottom-0 z-50 -translate-y-1/2 md:h-16 left-1/2 -translate-x-1/2   md:translate-y-1/2  justify-center absolute  gap-3 items-center">
            <div className="relative w-full h-full ">
                <label className="absolute left-4 md:left-6  top-1/2 -translate-y-1/2" htmlFor="search-input">
                    <svg
                        className="w-4 h-4 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        ></path>
                    </svg>
                </label>
                <input
              
                    className="rounded-lg md:rounded-full w-full h-full  block  pl-10 pr-5 md:pl-16 md:pr-10 md:text-2xl text-gray-800 font-thin shadow-md focus-visible:outline-none focus-visible:rounded-sm "
                    type="search"
                    name=""
                    id="search-input"
                    placeholder="Enter Movie Name..."
                />
                <div className="w-full h-auto absolute bottom-0 translate-y-full bg-white empty:hidden overflow-auto  divide-y-2 ">
                    
                </div>
            </div>
            {/* search button */}
            <button className="hidden md:block rounded-full   bg-[#3e8afa] h-full basis-auto text-center p-5 hover:bg-[#2160bc] ">
                <svg
                    className="mx-auto "
                    width="24"
                    height="24"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.3 10.85C9.1 10.65 9.004 10.4083 9.012 10.125C9.02 9.84167 9.12434 9.6 9.325 9.4L12.15 6.575H1C0.71667 6.575 0.479004 6.479 0.287004 6.287C0.0950036 6.095 -0.000663206 5.85767 3.4602e-06 5.575C3.4602e-06 5.29167 0.0960036 5.054 0.288004 4.862C0.480004 4.67 0.717337 4.57433 1 4.575H12.15L9.3 1.725C9.1 1.525 9 1.28733 9 1.012C9 0.736666 9.1 0.499333 9.3 0.3C9.5 0.0999997 9.73767 0 10.013 0C10.2883 0 10.5257 0.0999997 10.725 0.3L15.3 4.875C15.4 4.975 15.471 5.08333 15.513 5.2C15.555 5.31667 15.5757 5.44167 15.575 5.575C15.575 5.70833 15.554 5.83333 15.512 5.95C15.47 6.06667 15.3993 6.175 15.3 6.275L10.7 10.875C10.5167 11.0583 10.2877 11.15 10.013 11.15C9.73834 11.15 9.50067 11.05 9.3 10.85Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    );
}

export default Searchbar;
