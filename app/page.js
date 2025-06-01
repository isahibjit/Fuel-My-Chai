import Image from "next/image";
import { CiMoneyBill } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-[75vh] max-w-[80%] mx-auto">
      <div className="flex my-12 lg:flex-row flex-col  lg:gap-12 gap-8  justify-around items-center ">
        <div>
          <img
            src="background-image.png"
            className="rounded-lg"
            alt="image of women in saree holding money above mount fuji"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-6xl text-3xl text-[#0F1417] tracking-tighter jakarta-font-bold">
            Support the creators you love
          </h1>
          <p className="text-[#0F1417] xl:text-2xl text-xl">
            Fuel My Chai is the best way to support the creators you love.
            Accept simple donations, offer memberships, and so much more.
          </p>
          <div className="flex gap-8 font-bold">
            <button className="btn-primary">Explore</button>
            <button className="btn-secondary">Sign Up</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl  font-medium ">How it Works ?</h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 justify-between my-4">
        <div className="flex items-center gap-2 text-lg  font-medium border border-slate-300 hover:scale-110 transition-all duration-200 cursor-pointer rounded-lg py-3  pl-4 pr-24">
          <span>
            <CiMoneyBill className="text-3xl " />
          </span>
          <span>Simple Donation</span>
        </div>
        <div className="flex items-center gap-2 text-lg font-medium border border-slate-300 hover:scale-110 transition-all duration-200 cursor-pointer rounded-lg py-3  pl-4 pr-24">
          <span>
            <IoPersonOutline className="text-3xl " />
          </span>
          <span>Personalized Profiles</span>
        </div>
        <div className="flex items-center gap-2 text-lg font-medium border border-slate-300 hover:scale-110 transition-all duration-200 cursor-pointer rounded-lg py-3  pl-4 pr-24">
          <span>
            <FaPeopleGroup className="text-3xl " />
          </span>
          <span>Public Supporter</span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl  font-medium ">Creators love Fuel My Chai</h1>
        <div className="grid xl:grid-cols-3 gap-8 items-center justify-center   my-4">
          <div className="w-[300px] ">
            <img
              className="creator-img"
              src="Creators Image/girl 1.webp"
              alt=""
            />
            <p className="mt-4 mb-2 font-medium text-xl">
              "Fuel My Chai has been a game-changer for my creative work. The
              support from my audience is direct and meaningful."
            </p>
            <p className="text-[#5C738A] text-lg">Sophia, Artist</p>
          </div>
          <div className="w-[300px] ">
            <img
              className="creator-img"
              src="Creators Image/girl 2.jpg"
              alt=""
            />
            <p className="mt-4 mb-2 font-medium text-xl">
              "I love how easy it is to connect with my supporters on Fuel My
              Chai. It's a fantastic platform for creators."
            </p>
            <p className="text-[#5C738A] text-lg">Christina Chang, Model</p>
          </div>{" "}
          <div className="w-[300px] ">
            <img
              className="creator-img"
              src="Creators Image/girl 3.jpg"
              alt=""
            />
            <p className="mt-4 mb-2 font-medium text-xl">
             "Fuel My Chai has helped me build a community around my art. The direct support is invaluable."
            </p>
            <p className="text-[#5C738A] text-lg">Olivia, Writer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
