import ProfileCard from "@/components/ProfileCard";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Creators = () => {
  return (
   <div className="md:max-w-[70vw] max-w-[90%] min-h-[62vh] mx-auto  my-8">
    <h1 className="md:text-5xl text-3xl text-center jakarta-font-bold text-[#2e332e] my-2">Search Your Favourite Creators to Fund!</h1>
     <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 shadow-sm w-full max-w-full bg-[#EBEDF2] focus-within:ring-2 focus-within:ring-blue-500">
      <IoSearchOutline className="text-gray-500 mr-2 text-xl" />
      <input
        className="w-full outline-none placeholder-gray-400 text-xl"
        type="text"
        name="name"
        id="name"
        placeholder="Search"
        autoComplete="off"
      />
    </div>
    <ProfileCard />
   </div>
  );
};

export default Creators;
