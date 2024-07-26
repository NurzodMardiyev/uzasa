import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/header_bg.jpg";

export default function Header() {
  return (
    <div className="w-full">
      <Link to="/">
        <img src={bg} alt="" className="w-full" />
      </Link>
    </div>
  );
}
