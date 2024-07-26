import React from "react";
import "../App.css";

export default function TargetGoals() {
  return (
    <div className="about">
      <h1 className="text-[50px] text-center bg-[#F7F7F7]">Target goals</h1>
      <div className="container">
        <p className="mb-3 mt-3 font-bold">
          The primary goal of the Azerbaijan Animation Association public
          association is to help the development of national animation film art
          in Azerbaijan
        </p>
        <p className="mb-3 font-bold">
          Other goals of Azerbaijan Animation Association are:
        </p>
        <ul className="mb-3 list-disc ms-4 text-gray-700">
          <li>To develop the national animation industry;</li>
          <li>
            Encouraging creativity in children, teenagers and adults through
            animation;
          </li>
          <li>
            Supporting animation studios, animation professionals and
            enthusiasts;
          </li>
          <li>Protecting the interests of national animation;</li>
          <li>Promoting national animation in Azerbaijan and abroad.</li>
        </ul>
      </div>
    </div>
  );
}
