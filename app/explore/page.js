import React from "react";

const Explore = () => {
  return (
    <div className="my-8 max-w-[70%] mx-auto ">
      <h1 className="text-center text-5xl jakarta-font-bold text-[#2e332e] my-2 ">
        Explore About Us
      </h1>
      <img
        className=" rounded-lg object-cover object-left-top w-full h-[500px]"
        src="Explore/explore-bg.png"
        alt="indian women holding money"
      />
      <div className="my-8 text-lg">
        <h1 className="text-2xl font-medium mb-1">Our Story</h1>
        <p>
          Fuel My Chai was born from a simple idea: to connect creators with
          their audience in a meaningful way. Founded by Sarah Chen, a
          passionate artist herself, the platform aims to provide a space where
          creators can share their work, build communities, and receive direct
          support from their fans. We believe in the power of creativity and the
          importance of fostering a supportive ecosystem for artists of all
          kinds.
        </p>
      </div>
      <div className="my-8 text-lg">
        <h1 className="text-2xl font-medium mb-1">Our Mission</h1>
        <p>
          Our mission is to empower creators to thrive by providing them with
          the tools and resources they need to succeed. We are committed to
          building a platform that is inclusive, transparent, and
          community-driven, where creators can focus on what they do best:
          creating.
        </p>
      </div>
      <div className="my-8 text-lg">
        <h1 className="text-2xl font-medium mb-1">Our Values</h1>
        <div>
          <h5>At Fuel My Chai, we are guided by the following values:</h5>
          <p className="my-3">
            <span className="font-medium">Empowerment: </span>We believe in
            empowering creators to take control of their careers and connect
            with their audience on their own terms.
          </p>
          <p className="my-3">
            <span className="font-medium">Community: </span> We foster a
            supportive and inclusive community where creators and fans can
            connect, collaborate, and inspire each other.
          </p>
          <p className="my-3">
            <span className="font-medium">Transparency: </span>We are committed
            to transparency in all our operations, ensuring that creators have
            clear insights into their earnings and audience engagement.
          </p>
          <p className="my-3">
            <span className="font-medium">Innovation: </span>We continuously
            strive to innovate and improve our platform to meet the evolving
            needs of creators and their fans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
