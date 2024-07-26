import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import FestivalCard from "../components/festival/FestivalCard";
import "../App.css";

export default function Festival() {
  return (
    <div className="festival">
      <h1 className="text-[50px] text-center bg-[#F7F7F7] mb-4 ">
        ANIMAFILM International Animation Festival
      </h1>
      <div className="container">
        <div>
          <img
            src="https://anima.az/wp-content/uploads/2023/06/T7ERkEEg-1200x6751-1.jpeg"
            alt=""
            className="w-full"
          />
        </div>
        <div>
          <p className="mb-3 mt-3 ">
            ANIMAFILM promotes creativity with animation. We believe animated
            films can unite people and make significant changes in our society.
          </p>
          <p className="mb-3">
            Since 2018 ANIMAFILM Festival brings together children, young people
            and families, animation directors and studios to introduce them to
            international experience, meets them with local and foreign
            professionals, shows hundreds of animated films, holds master
            classes, conferences, concerts, performances and exhibitions.
          </p>
          <p>
            The 7th ANIMAFILM International Animation Festival will be held on
            2-6 October, 2024 in Baku, Azerbaijan.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-center text-xl mb-4 mt-4">
            Follow the Festival on Social Media
          </h3>
          <div className="flex gap-3 justify-center mb-8">
            <Link className="w-[60px] h-[60px] flex justify-center items-center bg-blue-700 rounded-full">
              <FaInstagram className="text-3xl text-white" />
            </Link>
            <Link className="w-[60px] h-[60px] flex justify-center items-center bg-pink-700 rounded-full">
              <FaFacebook className="text-3xl text-white" />
            </Link>
            <Link className="w-[60px] h-[60px] flex justify-center items-center bg-yellow-700 rounded-full">
              <FaYoutube className="text-3xl text-white" />
            </Link>
            <Link className="w-[60px] h-[60px] flex justify-center items-center bg-green-700 rounded-full">
              <FaTwitter className="text-3xl text-white" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-center text-xl mb-4">
            6th ANIMAFILM International Animation Festival
          </h3>

          <FestivalCard />
        </div>
      </div>
    </div>
  );
}
