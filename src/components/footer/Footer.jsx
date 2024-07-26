import React from "react";
import "../../App.css";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export default function Footer() {
  const location = useLocation();

  const hide = location.pathname === "/contactus" ? "hidden" : "";
  return (
    <>
      <div className={`news-container container ${hide}`}>
        <h1 className="text-[60px] mt-10 mb-3 text-center">Join Us</h1>
        <p className="text-center mb-5 text-[19px]  text-footer">
          You can become a member of Azerbaijan Animation Association or join as
          a volunteer.
        </p>
        <div className="btn-section text-center flex gap-3 justify-center mb-10">
          <Link
            to="/contactus"
            className="px-10 text-white py-4 bg-[#6B8E3C] rounded-3xl hover:bg-[#35591f] transition-all"
          >
            Become a member
          </Link>
          <Link
            to="/contactus"
            className="px-10 text-white py-4 bg-[#6B8E3C] rounded-3xl hover:bg-[#35591f] transition-all"
          >
            Contact with us
          </Link>
        </div>
      </div>
      <div className="footer bg-[#181947] text-white">
        <div className=" border-b-[#4c4c4c] border-b">
          <div className="container flex justify-between py-10 footer-contacts">
            <div className="contact w-[40%] ">
              <h4 className="text-xl font-bold">Contact</h4>
              <div className="mt-3">
                <Link className="flex items-center text-xl mb-3 hover:text-[#F07427]  transition-all  media">
                  <MdOutlineMail className="text-3xl me-2 text-[#6b8e3c] media-child " />
                  <span className="font-semibold text-sm">info@anima.az</span>
                </Link>
                <Link className="flex items-center text-xl mb-3 hover:text-[#F07427]  transition-all media ">
                  <FaFacebook className="text-3xl me-2 text-[#6b8e3c] media-child" />
                  <span className="font-semibold text-sm">Facebook</span>
                </Link>
                <Link className="flex items-center text-xl mb-3 hover:text-[#F07427] transition-all media ">
                  <FaInstagram className="text-3xl me-2 text-[#6b8e3c] media-child" />
                  <span className="font-semibold text-sm"> Instagram</span>
                </Link>
              </div>
            </div>
            <div className="subscribe w-[40%] ">
              <h4 className="text-xl font-bold">
                Subscribe to stay up to date with the magical world of
                animation!
              </h4>
              <form action="" className="flex flex-col gap-2 mt-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="px-3 py-3 text-black outline-none"
                />
                <button className="bg-[#6b8e3c] mt-3 py-3 rounded-3xl">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div className="container py-3 flex justify-between items-center">
            <div className="footer-footer">
              <Link>
                © 2017-2024 Azərbaycan Animasiya Assosiasiyası | Site by Unicode
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <Link to="https://mail.google.com/mail">
                  <FaFacebookF />
                </Link>
                <Link to="https://mail.google.com/mail">
                  <FaInstagram />
                </Link>
                <Link to="https://mail.google.com/mail">
                  <FaPlay className="text-sm" />
                </Link>
                <Link to="https://mail.google.com/mail">
                  <FaUsers className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
