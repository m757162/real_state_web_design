import React from "react";

// footer
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn,FaTwitter,FaPhoneAlt   } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="mt-5 bg-dark text-light pt-5 text-start">
        <div className="container-fluid">
          <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            <div className="col">
              <div className="footer-icon">
                <div className="h2">
                  Appertment<span className="color-primary">Z</span>
                </div>
                <div className="mt-2">
                  Search over 1 million listings including apartments, houses,
                  condos, and townhomes available for rent. You’ll find your
                  next home, in any style you prefer.
                </div>
              </div>
              <ul className="mt-3 text-light d-flex socialIcon">
                <li className="">
                  <GrFacebookOption />
                </li>
                <li className="">
                  <FaLinkedinIn />
                </li>
                <li className="">
                  <FaTwitter />
                </li>
                <li className="">
                  <AiFillInstagram />
                </li>
              </ul>
              <ul className="mt-5 text-light contact-sec">
                <li className="fw-bold">Contact Info:</li>
                <li className="">
                  <FaPhoneAlt />
                  +1 798 563 498
                </li>
                <li className="">
                  <IoIosMail />
                  m757162@gmail.com
                </li>
                <li className="">
                  <IoLocationSharp />
                  123 Urban Street, Cityville, USA
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <b className="color-primary">About us</b>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Legal Notices</li>
                <li>Privacy Notice</li>
                <li>Do Not Sell My Personal Info</li>
                <li>Equal Housing</li>
                <li>Avoid Scams</li>
              </ul>
            </div>

            <div className="col">
              <ul>
                <b className="color-primary">ADVERTISERS</b>
                <li>Advertise</li>
                <li>Add a Property</li>
                <li>Digital Feeds Program</li>
                <li>Customer Portal</li>
                <li>Community Voice</li>             
              </ul>
            </div>
            <div className="col">
              

              <ul>
                <b className="color-primary">NEIGHBORHOODS</b>                
                <li>Las Colinas</li>
                <li>Bronx, NYC</li>
                <li>Federal Hill MD</li>
                <li>Legal Notices</li>
                <li>East Village</li>
                <li>Do Not Sell My Personal Info</li>
                <li>Hyde Park</li>
                <li>Uptown Minneapolis</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <b className="color-primary">RENTAL MANAGER</b>

                <li>Rental Manager</li>
                <li>List Your Property For Rent</li>
                <li>Screen Applicants</li>
                <li>Create Rental Leases</li>
                <li>Collect Rent Online</li>
                <li>Rental Manager Resources</li>

              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center border-top border-secondary py-3 mt-3 ">
              © 2024 All Right Reserved by Mahamudul Hasan
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
