import React from "react";
import "../App.css";

export default function ContactUs() {
  return (
    <div className="mb-8 festival">
      <h1 className="text-[50px] text-center bg-[#F7F7F7] ">Contact with us</h1>
      <div className="container">
        <p className="mb-3 mt-3 font-bold">Who can join the association?</p>
        <p>
          Every physical and legal person engaged in animation cinema in
          Azerbaijan (except for state institutions and local self-government
          bodies) can become a member of the Azerbaijan Animation Association
          public association.
        </p>
        <p className="mb-3 font-bold">
          Individuals or organizations that can become members;
        </p>
        <ul className="mb-3 list-disc ms-4 text-gray-700">
          <li>
            Directors, animators, artists, composers, editors, screenwriters and
            other individuals who worked on at least one professional animated
            film;
          </li>
          <li>
            Animation studios, distribution companies, cinemas and other legal
            entities;
          </li>
          <li>Non-governmental organizations that support animation.</li>
        </ul>
      </div>
      <div className="news-container container">
        <div className="card-section border rounded-lg mt-10">
          <div className="btns text-center border-b">
            <button className="text-[13px] font-bold py-5 text-[#6B8E3C] border-b-[#6b8e3c] border-b px-5 border-x">
              Contact Us
            </button>
          </div>
          <form className="cards px-10 py-5 flex flex-col w-[50%] m-auto">
            <label className="flex flex-col">
              <span>Name</span>
              <input
                type="text"
                className="border px-3 py-1.5 outline-none mb-2"
              />
            </label>
            <label className="flex flex-col">
              <span>Email</span>
              <input
                type="email"
                className="border px-3 py-1.5 outline-none mb-2"
              />
            </label>
            <label className="flex flex-col">
              <span>Message</span>
              <textarea
                name=""
                id=""
                className="border px-3 py-1.5 outline-none mb-2"
              ></textarea>
            </label>
            <div className="flex items-start justify-start">
              <input type="checkbox" className="mt-1 me-2" />
              <span className="text-start justify-start flex text-sm">
                We can send you product updates and offers via email. It is
                possible to opt-out at any time.
              </span>
            </div>
            <button className="py-2 mt-3 text-white rounded-xl bg-[#6B8E3C]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
