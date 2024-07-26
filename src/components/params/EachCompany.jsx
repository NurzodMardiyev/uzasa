import React from "react";
import { Link, useParams } from "react-router-dom";
// import { useGetCompaniesApiQuery } from "../../features/api/apiSlice";

const data = [
  {
    id: "123fvg123esa",
    name: "“Dynamic Box” MMC",
    img: "https://anima.az/wp-content/uploads/2022/12/65462b32adbbe-300x300.png",
    CEO: "Shahin Aliyev",
    about:
      "Dynamic Box is a studio with almost 100 projects delivered for international clients across different industries (education, entertainment, transportation, marketing, etc.), using a range of different technologies and techniques. We were founded in 2017 and are a game development studio, in the process of entering animation industry.",
    link1: {
      name: "Dynamic Box – website",
      address: "https://www.dynamicbox.net/",
    },
    link2: {
      name: "Dynamic Box – LinkedIn",
      address: "https://www.linkedin.com/company/dynamicboxs",
    },
  },
];
export default function EachCoompany() {
  // const { data } = useGetCompaniesApiQuery();
  const id = useParams();

  const newsData = data?.filter((item) => item.id === id.id);

  const { img, name, CEO, about, link1, link2 } = newsData[0];
  return (
    <div>
      <div className="text-center text-[50px] bg-[#F7F7F7]">
        <h1 className="w-[80%] m-auto leading-[50px] py-5">{name}</h1>
      </div>
      <div className="container flex">
        <div>
          <p className="font-bold">{name}</p>
          <p className="my-4 font-bold">CEO: </p>
          <p>{CEO}</p>
          <p className="my-4 font-bold">About: </p>
          <p>{about}</p>
          <p className="my-4 font-bold">Link: </p>
          <Link to={link1.address}>{link1.name}</Link>
          <Link to={link2.address}>{link2.name}</Link>
        </div>
        <div className="mb-5">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
}
