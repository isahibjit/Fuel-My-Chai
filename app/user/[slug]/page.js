// app/user/[slug]/page.js

import SupporterCard from "@/components/SupporterCard";
import { IoQrCodeOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const User = async ({ params }) => {
  const slug = params.slug;

  return (
    <div className="max-w-[70%] min-h-[70vh] mx-auto ">
      <div className=" my-12 relative">
        <img
          src="https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617553_960_720.jpg"
          alt=""
          className="rounded-lg w-full"
        />
        <div className="absolute left-[44%] -bottom-[40%] ">
          <img
            src="/Creators Image/girl 3.jpg"
            alt="profile image"
            className="rounded-full profile-spin  ring-2 ring-yellow-500 w-[150px] h-[150px] object-cover"
          />
          <div className="text-lg flex flex-col items-center  relative right-[20px]">
            <h1 className="jakarta-font-bold text-2xl   ">{slug}</h1>
            <p className="text-[#333632] ">Illustrator and comic artist</p>
            <p className="text-[#333632] ">Joined 2021</p>
          </div>
        </div>
      </div>

      <section className="mt-38 manrope-font flex flex-col  items-center">
        <div>
          <p className="text-center text-lg">
            I'm Priya, a freelance illustrator and comic artist based in Mumbai.
            I love creating vibrant, expressive characters and stories that
            resonate with people. Your support helps me continue creating and
            sharing my art!
          </p>
        </div>
        <div className="flex flex-col max-w-[35vw] gap-4 mt-4">
          <div className="flex gap-8">
            <button className="btn-donate manrope-font-bold">
              Donate Rs.50
            </button>
            <button className="btn-donate manrope-font-bold">
              Donate Rs.100
            </button>
            <button className="btn-donate manrope-font-bold">
              Donate Rs.500
            </button>
          </div>
          <button className="btn-primary manrope-font-bold">Follow</button>
        </div>
      </section>
      <section>
        <div>
          <h1 className="manrope-font-bold mb-4 text-xl">Recent Supporter</h1>
          <SupporterCard />
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center gap-4">
          <div className="share-icons-div">
            <span className="share-icons"><FaXTwitter className="text-3xl text-white rounded-lg" /> </span>
            <p className="text-lg manrope-font">Share on Twitter</p>
          </div>
          <div className="share-icons-div">
           <span className="share-icons"><FaWhatsapp className="text-3xl text-white rounded-lg" /> </span>
            <p className="text-lg manrope-font">Share on Whatsapp</p>
          </div>
          <div className="share-icons-div">
             <span className="share-icons"><IoQrCodeOutline className="text-3xl text-white rounded-lg" /> </span>
            <p className="text-lg manrope-font">Share with Qr Code</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
