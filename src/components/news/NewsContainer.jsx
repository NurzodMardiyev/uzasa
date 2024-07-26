import React, { useState } from "react";
import "../../App.css";
import NewsCard from "./NewsCard";

export default function NewsContainer() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="news-container container">
      <h1 className="text-[60px] mt-10 mb-5">News</h1>
      <div className="card-section border rounded-lg">
        <div className="btns text-center border-b">
          <button
            onClick={() => setFilter("all")}
            className="text-[13px] font-bold py-5 hover:text-[#6B8E3C] hover:border-b-[#6b8e3c] hover:border-b px-5 border-x"
          >
            All
          </button>
          <button
            onClick={() => setFilter("Festival")}
            className="text-[13px] font-bold py-5 hover:text-[#6B8E3C] hover:border-b-[#6b8e3c] hover:border-b px-5 border-x"
          >
            ANIMAFILM Festival
          </button>
          <button
            onClick={() => setFilter("animation")}
            className="text-[13px] font-bold py-5 hover:text-[#6B8E3C] hover:border-b-[#6b8e3c] hover:border-b px-5 border-x"
          >
            Azarbaijani animation
          </button>
          <button
            onClick={() => setFilter("opportunities")}
            className="text-[13px] font-bold py-5 hover:text-[#6B8E3C] hover:border-b-[#6b8e3c] hover:border-b px-5 border-x"
          >
            Funding opportunities
          </button>
          <button
            onClick={() => setFilter("Blog")}
            className="text-[13px] font-bold py-5 hover:text-[#6B8E3C] hover:border-b-[#6b8e3c] hover:border-b px-5 border-x"
          >
            Blog
          </button>
        </div>
        <div className="cards px-10 py-5">
          <NewsCard filter={filter} />
        </div>
      </div>
    </div>
  );
}
