import React from "react";
import "../../App.css";
import ProjectCard from "./ProjectCard";
// import { useGetProjectssApiQuery } from "../../features/api/apiSlice";

const projects = [
  {
    id: "123jb123essa",
    name: "“ANIMAFILM School",
    img: "https://anima.az/wp-content/uploads/2022/12/Animafilm-School.png",
    about:
      "ANIMAFILM School was founded in Baku in 2020 to organize regular animation courses. At the ANIMAFILM School, professional animators and directors teach students scriptwriting, staging, character development, and the animation. The school organizes workshops and master classes with several European animation professionals for adults and children during the ANIMAFILM festival.The school has a curriculum suitable for everyone, regardless of experience and knowledge. The lessons focus on acquiring both theoretical and practical knowledge. <b> At the end of the program,</b> students are provided with an appropriate certificate that they have passed the educational program.",
    link1: {
      name: "ANIMAFILM School – Instagram",
      address: "https://www.dynamicbox.net/",
    },
    link2: {
      name: "ANIMAFILM School – Facebook",
      address: "https://www.linkedin.com/company/dynamicboxs",
    },
  },
  {
    id: "12sds3123essa",
    name: "“ANIMAFILM School",
    img: "https://anima.az/wp-content/uploads/2022/12/Animafilm-School.png",
    about:
      "ANIMAFILM School was founded in Baku in 2020 to organize regular animation courses. At the ANIMAFILM School, professional animators and directors teach students scriptwriting, staging, character development, and the animation. The school organizes workshops and master classes with several European animation professionals for adults and children during the ANIMAFILM festival.The school has a curriculum suitable for everyone, regardless of experience and knowledge. The lessons focus on acquiring both theoretical and practical knowledge. At the end of the program, students are provided with an appropriate certificate that they have passed the educational program.",
    link1: {
      name: "ANIMAFILM School – Instagram",
      address: "https://www.dynamicbox.net/",
    },
    link2: {
      name: "ANIMAFILM School – Facebook",
      address: "https://www.linkedin.com/company/dynamicboxs",
    },
  },
];

export default function ProjectContainer() {
  // const { data: projects } = useGetProjectssApiQuery();
  return (
    <div className="news-container container">
      <h1 className="text-[60px] mt-10 mb-5 text-center">Projects</h1>
      <div className="card-section  rounded-lg">
        <div className="cards px-10 py-5 flex justify-around flex-wrap">
          {projects?.map((item) => (
            <ProjectCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
