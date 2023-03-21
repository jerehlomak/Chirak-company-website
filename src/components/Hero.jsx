import { useState } from "react";
// import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
// import { FaLinkedinIn } from "react-icons/fa";

import rec1 from "../assets/images/img/rec1.png";
import rec2 from "../assets/images/img/rec2.png";
import rec3 from "../assets/images/img/rec3.png";
import rec4 from "../assets/images/img/rec4.png";
import Contact from "./Contact/Contact";
// import AnimatedTitle from "./AnimatedTitle";
import AnimateWord from "./Animate/AnimateWord";

const Hero = () => {
  const [contact, setContact] = useState(false);
  // const social = "p-2 text-center rounded-full cursor-pointer";
  return (
    <div className="hero w-full relative justify-between items-center grid md:pt-20 lg:pt-10 grid-cols-1 md:grid-cols-2 mb-40  lg:mb-0 font-alice">
      <div className="flex flex-col items-center space-y-4 mt-20 md:-mt-10 lg:mt-0 text-center">
        {/* <h1 className='font-alice font-bold text-3xl text-white mb-10'>
          GET INVOVLED AND LEAD
        </h1> */}

        <AnimateWord title1="" title2="get involved and lead" />

        <p className='text-white text-lg w-[80%] md:w-[70%] lg:w-[50%] font-alice leading-8 pb-10'>
        We are Chirak! A diversified and fully integrated organization.
We excel in managing diverse portfolios of assets and investments in Nigeria and abroad to generate substantial financial return for our shareholders. You sure deserve a business environment that works.
        </p>

        <button
          onClick={() => setContact(true)}
          className="uppercase bg-white text-[#3F1E85] rounded-full py-2 px-8 font-bold font-alice cursor-pointer"
        >
          Talk to Us
        </button>
        {/* <div className="flex gap-4 items-center pt-10">
          <span className={`bg-[#1877F2] ${social}`}>
            <BsFacebook className="text-white" size={21} />
          </span>
          <span className={`bg-[#1DA1F2] ${social}`}>
            <BsTwitter className="text-white" size={21} />
          </span>
          <span className={`bg-[#2867B2] ${social}`}>
            <FaLinkedinIn className="text-white" size={21} />
          </span>
          <span className={`bg-[#F00073] ${social}`}>
            <BsInstagram className="text-white" size={21} />
          </span>
        </div> */}
      </div>

      <div className="relative flex flex-col items-center justify-center mt-20 md:mt-0 pb-10 lg:mt-0">
        <div className="relative border border-white p-8 rounded-full w-[70%] sm:w-[70%] md:w-[70%] lg:w-[50%]">
          <div className="py-56 sm:py-80 md:py-60 lg:py-56 rounded-full bg-gradient-to-b from-[#10A8E9] to-[#090F9C] p-3 shadow-xl">
            <div className="absolute rounded-full p-16 bg-white/70 top-0 -right-8 shadow-xl blur-[2px]"></div>
            <div className="relative ">
              <div className="flex absolute -top-10 md:-top-0 left-0 right-0 text-center">
                <img
                  src={rec1}
                  alt=""
                  className="left-3 top-0 h-[100%] w-[60%]"
                />
                <img
                  src={rec4}
                  alt=""
                  className="absolute left-6 top-0 h-[100%] w-[60%]"
                />
                <img
                  src={rec3}
                  alt=""
                  className="absolute left-9 top-0 h-[100%] w-[60%]"
                />
                <img
                  src={rec2}
                  alt=""
                  className="absolute left-20 top-0 h-[100%] w-[60%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {contact && <Contact setContact={setContact} />}
    </div>
  );
};

export default Hero;
