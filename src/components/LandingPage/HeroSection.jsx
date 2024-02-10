// import React from "react";
import background from "../../assets/images/landing-background.png";
import headerImage from "../../assets/images/header-image.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto relative z-20 flex flex-col lg:flex-row justify-between items-center h-full">
        <div className="pl-14 text-center lg:text-left lg:w-2/4 lg:mr-10">
          <h1 className="text-8xl font-bold mb-4 text-white">Agropay</h1>
          <p className="text-white text-5xl ">
            {" "}
            <span className="text-green-500">|</span> Farmers Pride
          </p>
          <p className="text-sm text-white mt-8 ">
            Agropay seeks to empower farmers, unlock collaborative investments,
            and establish a transparent, efficient, and equitable agricultural
            ecosystem.
          </p>
          <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 text-xl rounded-full">
            Register here 
          </button>
        </div>
        <div className="w-full lg:w-2/4">
          <img src={headerImage} alt="" className="w-3/4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
