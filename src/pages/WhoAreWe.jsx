import React from "react";
import "../App.css";
export default function WhoAreWe() {
  return (
    <div className="about">
      <h1 className="text-[50px] text-center bg-[#F7F7F7]">Who are we?</h1>
      <div className="container">
        <p className="mb-3">
          Azerbaijan Animation Association is an NGO that works for the
          development of animation film art in our country and is managed only
          by experts in this field.
        </p>
        <p className="mb-3">The primary tasks of the association are:</p>
        <ul className="mb-3 list-disc ms-4 text-gray-400">
          <li>
            Supporting animation studios, professionals and enthusiasts by
            connecting them;
          </li>
          <li>Implementing educational programs on animation;</li>
          <li>Cooperating with state institutions and public associations;</li>
          <li>Promoting national animation in Azerbaijan and abroad.</li>
        </ul>
        <p className="mb-3">
          To fulfill these tasks, the association regularly implements local and
          international projects, festivals, educational programs, conferences
          and other public events.
        </p>
      </div>
    </div>
  );
}
