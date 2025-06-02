"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border border-x-0 border-t-0 border-slate-400 py-2">
      <nav className="flex justify-between jakarta-font max-w-[95%] mx-auto items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.gif" alt="chai logo" width={50} />
          <p className="text-2xl jakarta-font-bold tracking-tighter">
            Fuel My Chai
          </p>
        </Link>
        <div ref={menuRef}>
          <div
            onClick={() => setShowMenu((prev) => !prev)}
            className=" select-none border border-gray-300 md:hidden p-2 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-300"
          >
            <GiHamburgerMenu className="text-3xl" />
          </div>
          {/* navItems */}
          <div
            className={`border ${
              showMenu ? "block" : "hidden"
            }  border-gray-300 rounded-lg bg-blue-100 absolute right-0 top-[65px] w-[40vw]`}
          >
            <ul className="gap-4 flex flex-col text-[#0F1417] py-3   justify-center items-center">
              <li className="text-xl font-medium py-2 px-4 rounded-lg transition-all duration-200  hover:bg-[#99ec91]">
                <Link href="/">Home</Link>
              </li>
              <li className="text-xl font-medium py-2 px-4 rounded-lg transition-all duration-200  hover:bg-[#99ec91]">
                <Link href="/explore">Explore</Link>
              </li>
              <li className="text-xl font-medium py-2 px-4 rounded-lg transition-all duration-200  hover:bg-[#99ec91]">
                <Link href="/creators">Creators</Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-xl font-medium py-2 px-4 rounded-lg hover:bg-[#99ec91]"
                >
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <ul className="md:flex gap-8 text-[#0F1417] hidden  justify-center items-center">
          <li className="text-xl font-medium hover:text-[#555151]">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl font-medium hover:text-[#555151]">
            <Link href="/explore">Explore</Link>
          </li>
          <li className="text-xl font-medium hover:text-[#555151]">
            <Link href="/creators">Creators</Link>
          </li>
          <li className="text-xl  font-bold ">
            <Link href="/login" className="btn-primary">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
