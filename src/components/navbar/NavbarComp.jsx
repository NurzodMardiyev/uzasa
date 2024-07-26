import React from "react";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import "../../App.css";
export default function NavbarComp() {
  return (
    <div className="navbar-nav bg-[#6B8E3C] ">
      <div className="container flex justify-between items-center py-2.5 text-white">
        <div className="flex items-center gap-1 text-[17px]">
          <LuMail />
          <Link to="https://mail.google.com/mail">info@uzasa.uz</Link>
        </div>
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
  );
}
