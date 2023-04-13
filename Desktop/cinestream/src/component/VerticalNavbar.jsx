import React, { useState } from "react";
import { Link } from "react-router-dom";

function VerticalNavbar(props) {
    const [showMenu, setShowMenu] = useState(false);
  
 
    return (
        <>
            <button
                className="sm:hidden space-x-10 stroke-white w-6 h-6 "
                onClick={() => setShowMenu(!showMenu)}
            >
                <svg viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 1H17M1 7H17M1 13H17"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <div
                className={`${
                    showMenu ? "flex" : "hidden"
                }   flex-col justify-center align-middle text-center sm:hidden   absolute right-5 top-12  rounded  border bg-white dark:bg-black z-10 dark:text-white `}
            >
                <Link className="hover:bg-slate-300 px-10 py-1" to="/">
                    Home
                </Link>
                {/* <a className="hover:bg-slate-300 px-10 py-1" href="">Movies</a> */}
                <a className="hover:bg-slate-300 px-10 py-1" href="">
                    Top IMDB
                </a>
                <button onClick={props.switchTheme} className="hover:bg-slate-300 px-10 py-1  fill-black dark:fill-white " href="">
                    <svg
                        width="max"
                        height="18"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 18C6.5 18 4.375 17.125 2.625 15.375C0.875 13.625 0 11.5 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C9.23333 0 9.46267 0.00833343 9.688 0.0250001C9.91333 0.0416668 10.134 0.0666666 10.35 0.0999999C9.66667 0.583333 9.12067 1.21267 8.712 1.988C8.30333 2.76333 8.09933 3.60067 8.1 4.5C8.1 6 8.625 7.275 9.675 8.325C10.725 9.375 12 9.9 13.5 9.9C14.4167 9.9 15.2583 9.69567 16.025 9.287C16.7917 8.87833 17.4167 8.33267 17.9 7.65C17.9333 7.86667 17.9583 8.08733 17.975 8.312C17.9917 8.53667 18 8.766 18 9C18 11.5 17.125 13.625 15.375 15.375C13.625 17.125 11.5 18 9 18Z"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default VerticalNavbar;
