import React, { useState } from "react";
import "../../App.css";
import MembersCard from "./MembersCard";

export default function MembersContainer() {
  const [filter, setFilter] = useState(true);

  return (
    <div className="news-container container">
      <h1 className="text-[60px] mt-10 mb-5 text-center">Members</h1>
      <div className="card-section border rounded-lg">
        <div className="btns text-center border-b">
          <button
            onClick={() => setFilter(true)}
            className="text-[13px] font-bold py-5 hover:text-[#6B8E3C] hover:border-b-[#6b8e3c] hover:border-b px-5 border-x"
          >
            Individuals
          </button>
          <button
            onClick={() => setFilter(false)}
            className="text-[13px] font-bold py-5 hover:text-[#6B8E3C] hover:border-b-[#6b8e3c] hover:border-b px-5 border-x"
          >
            Companies
          </button>
        </div>
        <div className="cards px-10 py-5">
          <MembersCard filter={filter} />
        </div>
      </div>
    </div>
  );
}
