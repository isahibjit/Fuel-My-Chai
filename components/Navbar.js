import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="border border-x-0 border-t-0 border-slate-400 py-2">
      <nav className="flex justify-between jakarta-font max-w-[95%] mx-auto items-center">
        <Link href="/" className="flex items-center gap-2">
        <img src="/logo.gif" alt="chai logo" width={50} />
          <p className="text-2xl jakarta-font-bold tracking-tighter">Fuel My Chai</p>
        </Link>
        <ul className="flex gap-8 text-[#0F1417]  justify-center items-center">
          <li className="text-xl font-medium hover:text-[#555151]">
            <Link href="/explore">Explore</Link>
          </li>
          <li className="text-xl font-medium hover:text-[#555151]">
            <Link href="/creators">Creators</Link>
          </li>
          <li className="text-xl  font-bold ">
            <Link href="/login" className="btn-primary" >
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
