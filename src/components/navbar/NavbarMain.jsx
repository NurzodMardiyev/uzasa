import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import "../../App.css";

export default function NavbarMain() {
  const [burger, setBurger] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleClickFunk = (e) => {
    setSearchValue("");
    setSearchOpen(false);
    navigate("/festival");
  };

  const handleSearchLocation = (e) => {
    e.preventDefault();
    setSearchOpen(false);
  };

  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [burger]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const show = burger ? "hide" : "show";

  return (
    <div className="navbarmain container flex items-center justify-between py-4">
      <div className="queryHidden"> </div>
      <div className="logo w-[150px]">
        <Link to="/" className="text-3xl py-2 block font-bold text-[#6B8E3C]">
          UZASA
        </Link>
      </div>
      <div className="z-50 flex justify-center items-center burger_box">
        {burger ? (
          <GiHamburgerMenu
            onClick={() => setBurger(false)}
            className="me-[0.3rem] text-[#6B8E3C]"
          />
        ) : (
          <IoCloseSharp
            className="font-bold text-2xl text-[#6B8E3C]"
            onClick={() => setBurger(true)}
          />
        )}
      </div>
      <ul className={`flex items-center burger ${show}`}>
        <li>
          <Link
            className="px-4 text-sm hover:text-[#6B8E3C] transition-all duration homes-150 navN py-8 font-bold"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="relative enterTags">
          <Link className="px-4 text-sm hover:text-[#6B8E3C] transition-all duration homes-150 navN py-8 font-bold">
            About us
          </Link>
          <div className="flex flex-col absolute border tags w-[200px] mt-7 bg-[#F2F2F2] resres z-40">
            <Link
              className="hover:bg-[#E0E0E0] p-2.5 border-b-black-300 border-b  res"
              to="/whoarewe"
            >
              Who Are we?
            </Link>
            <Link
              className="hover:bg-[#E0E0E0] p-2.5 border-b-black-300 border-b res "
              to="targetgoals"
            >
              Target Goals
            </Link>
          </div>
        </li>
        <li>
          <Link
            className="px-4 text-sm hover:text-[#6B8E3C] transition-all duration homes-150 navN py-8 font-bold z-50"
            to="/festival"
          >
            Festival
          </Link>
        </li>
        <li className="relative enterTags">
          <Link
            to="/projects"
            className="px-4 text-sm hover:text-[#6B8E3C] transition-all duration homes-150 navN py-8 font-bold"
          >
            Projects
          </Link>
          <div className="flex flex-col absolute border tags w-[200px] mt-7 bg-[#F2F2F2] resres z-40">
            <Link
              className="hover:bg-[#E0E0E0] p-2.5 border-b-black-300 border-b  res"
              to="/projects"
            >
              Schools
            </Link>
            <Link
              className="hover:bg-[#E0E0E0] p-2.5 border-b-black-300 border-b res "
              to="/projects"
            >
              Books
            </Link>
          </div>
        </li>
        <li>
          <Link
            className="px-4 text-sm hover:text-[#6B8E3C] transition-all duration homes-150 navN py-8 font-bold"
            to="/contactus"
          >
            Contact with us
          </Link>
        </li>
        <div className="search_box">
          <button
            className="text-xl ms-3"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <IoMdSearch className="mt-2" />
          </button>
          {searchOpen && (
            <form
              ref={formRef}
              action=""
              className="absolute inputSearch w-[300px]"
              onSubmit={handleSearchLocation}
            >
              <input
                type="text"
                placeholder="Search"
                className="w-[320px] border rounded-md"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <button className="clear absolute" onClick={handleClickFunk}>
                  x
                </button>
              )}
            </form>
          )}
        </div>
      </ul>
    </div>
  );
}
