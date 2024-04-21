import React from "react";
import PhoneIcon from "../assets/icon/teliphone.svg";
import Mail from "../assets/icon/Group.svg";
import Globe from "../assets/icon/globe.svg";
import Fb from "../assets/icon/fb.svg";
import Tw from "../assets/icon/tw.svg";
import Pinterest from "../assets/icon/pinterest.svg";

import ImgCard from "../components/ImgCard";
import StoreImg from "../assets/image/storeImg.png";

import { SlSocialInstagram } from "react-icons/sl";

// react icon
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

// footer
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
// custom components
import SelectVariants from "../components/SelectForm";

// home page sections
import Topbar from "../components/HomePageSections/TopBar";
import Navbar from "../components/HomePageSections/NavBar";
import HeroText from "../components/HomePageSections/HeroText";
import SlideSec from "../components/HomePageSections/Slide-Sec";
import ManageProparty from "../components/HomePageSections/ManageProparty";
import Blog from "../components/HomePageSections/Blog";
import SearchSec from "../components/HomePageSections/Search-Sec";
import Footer from "../components/HomePageSections/Footer";
import ReactSelect from "../components/SelectForm";

import { motion } from "framer-motion";


const Home = () => {
  document.addEventListener("scroll", function () {
    if (window.scrollY >= "50") {
      // alert('is 50')
      var elem = document
        .getElementById("navbar")
        .classList.add("scrollEffect");
    } else {
      var elem = document
        .getElementById("navbar")
        .classList.remove("scrollEffect");
    }
  });

  return (
    <>
      {/* top bar */}
      <Topbar />
      {/* navbar bar */}
      <Navbar />
      {/* hero section */}
      <div className="container-fluid">
        <div className="row row bg-body-tertiary">
          <div className="col-lg-6 hero-fst-sec">
            <div className="hero-content">
              <HeroText />
              <div className="p-4  select-option position-absolute  d-flex flex-column flex-md-row  gap-3 bg-body rounded-2">
                <ReactSelect />
                <button className="btn btn-theme  w-100">Explore Now</button>
              </div>
              <div className="d-flex  justify-content-center gap-3 hero-cnt-exp">
                <div className="">
                  <div className="fw-bold 35">20+</div>
                  <span className="my-2 text-ash">Years of experience</span>
                </div>
                <div className="">
                  <div className="fw-bold 35">80+</div>
                  <span className="my-2 text-ash">Property Ready</span>
                </div>
                <div className="">
                  <div className="fw-bold 35">1450+</div>
                  <span className="my-2 text-ash">Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="col d-md-block d-none p-0 st-home">
            <div className="hero-img"></div>
          </div>
        </div>
      </div>
      {/* slide section */}
      <section className="bg-dark rounded-5 py-5 position-relative st-home-slide-sec">
        <SlideSec className="slide_sec" />
      </section>
      {/* center body */}
      <div className="container-lg overflow-x-hidden">
        <ImgCard animation_direction="-" />
      </div>
      <section className="bg-body-secondary pt-1 pb-5 overflow-x-hidden">
        <div className="container-lg ">
          <ImgCard />
        </div>
      </section>
      {/* manage Proparty */}
      <ManageProparty />
      {/* blog section */}
      <Blog />
      {/* search */}
      <SearchSec />
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
