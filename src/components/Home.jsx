import React from "react";
import HeroImage from "../assets/parikshitPF2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-white to-slate-200 "
    >
        {/* bg-gradient-to-t from-white via-amber-100 to-amber-200 */}
        {/* bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-white to-slate-300  */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-fit pb-12 sm:pb-0">
          <h2 className="text-4xl sm:text-5xl font-bold py-4 text-slate-900">
            Hi! I'm Parikshit Rao Kasuganti -
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400">
            Full Stack Developer
          </h2>
          <p className="text-slate-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-400 via-yellow-400 to-amber-400 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className=" mx-auto w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;