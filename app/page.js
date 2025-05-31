import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[75vh] ">
      <div className="flex my-12  gap-12 max-w-[70%] mx-auto justify-around items-center ">
        <div>
          <img
            src="background-image.png"
            className="rounded-lg"
            alt="image of women in saree holding money above mount fuji"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl jakarta-font-bold">
            Support the creators you love
          </h1>
          <p className="text-[#0F1417] text-2xl">
            Fuel My Chai is the best way to support the creators you love.
            Accept simple donations, offer memberships, and so much more.
          </p>
          <div className="flex gap-8 font-bold">
            <button className="btn-primary">Explore</button>
            <button className="btn-secondary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
