"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const { data: session, status } = useSession();
  console.log(session);
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
                {session?.user ? (
                  <button>
                    <img
                      src={session.user.image}
                      alt="profile image"
                      width={50}
                      className="rounded-full hover:scale-105 transition-all duration-200"
                    />
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="text-xl font-medium py-2 px-4 rounded-lg hover:bg-[#99ec91]"
                  >
                    Log in
                  </Link>
                )}
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
            {session?.user ? (
              <div className="group relative inline-block">
                <button>
                  <img
                    src={session.user.image}
                    alt="profile image"
                    width={50}
                    className="rounded-full hover:scale-105 transition-all duration-200"
                  />
                </button>
                <div
                  id="dropdown"
                  className="z-10  hidden  group-hover:block absolute -right-[40px] top-[50px]  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/update-profile"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                      onClick={()=>signOut()}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-xl font-medium py-2 px-4 rounded-lg hover:bg-[#99ec91]"
              >
                Log in
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
