import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "../../App.css";

export default function FestivalCard() {
  return (
    <div>
      <div className="flex gap-4 festival-wrapper">
        <div>
          <img
            src="https://anima.az/wp-content/uploads/2023/08/Light-Animafilm-6-2-1-1536x1536.jpg"
            alt=""
          />
        </div>
        <div>
          <p>
            The 6th ANIMAFILM International Animation Festival, organized by the
            Azerbaijan Animation Association, with the support of the Ministry
            of Culture of the Republic of Azerbaijan and the Film Agency of the
            Republic of Azerbaijan, was held at the Nizami Cinema Center from
            September 6 to 10, 2023. A total of 64 diverse animated films for
            both children and adults were screened over the course of five days.
            The theme of the festival was “Women’s Rights”. The revenue obtained
            from ticket sales was donated to local young women directors.
          </p>
        </div>
      </div>
      <div className="border-b border-b-black pb-4 mt-6">
        <p className="flex gap-3 justify-center flex-wrap-item">
          <Link className="text-2xl font-bold flex items-center text-[#6B8E3C]">
            <FaChevronRight className="text-2xl" /> Tikcets
          </Link>
          <Link className="text-2xl font-bold flex items-center text-[#6B8E3C]">
            <FaChevronRight className="text-2xl" /> Program
          </Link>
          <Link className="text-2xl font-bold flex items-center text-[#6B8E3C]">
            <FaChevronRight className="text-2xl" /> Catalogue
          </Link>
          <Link className="text-2xl font-bold flex items-center text-[#6B8E3C]">
            <FaChevronRight className="text-2xl" /> Nominees
          </Link>
        </p>
      </div>
    </div>
  );
}
