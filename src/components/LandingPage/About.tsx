import React from "react";
import CardImage from "../../assets/images/about-card-left.png";


const About = () => {
    return (
        <section className="py-12 px-4" style={{ backgroundColor: "#478d7d" }}>
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <img src={CardImage} alt="About Card" className="" style={{ maxWidth: '363px', height: 'auto' }} />
                </div>
                <div className="mb-32 w-4/6">
                    <h2 className="text-sm font-bold mb-4 text-white">About Agropay Group</h2>
                    <h1 className="text-6xl text-white w-4/5 font-extrabold">We Are The Best In Agricultural Finance</h1>
                    <p className="text-sm w-4/5 text-gray-100 mb-4">
                        We empower smallholder farmers in Africa by providing them with access to financial inclusion and collaborative investments through Agropay.
                    </p>
                    <p className="text-1xl ml-20 mt-8 w-3/5 text-gray-100">
                        At Agropay, we revolutionize the landscape of agricultural finance in Africa. Our platform stands as a beacon of financial inclusion
                    </p>
                    <button className="mt-4 ml-80 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 text-sm rounded-full">
           Read More
          </button>
                </div>
            </div>
        </section>
    );
};

export default About;
