/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";

export default function InnerText({ text }) {
  useEffect(() => {
    window.document.getElementById("innerTextId").innerHTML = text;
  }, [text]);

  return <h3 id="innerTextId" className="font-semibold mt-6"></h3>;
}
