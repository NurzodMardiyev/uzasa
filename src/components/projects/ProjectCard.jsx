import React from "react";
import { Link } from "react-router-dom";
// import InnerText from "../InnerText";

export default function ProjectCard({ item }) {
  return (
    <div key={item.id} className=" max-w-[400px] mb-4">
      <Link className="flex flex-col justify-center items-center w-full ">
        <div className="max-w-[260px]">
          <img src={item.img} alt="" className="w-full " />
        </div>
        <div>
          {/* <InnerText text={item.about} /> */}
          <h3 className="font-semibold mt-6">{item.name}</h3>
        </div>
      </Link>
    </div>
  );
}
