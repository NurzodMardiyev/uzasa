import React from "react";
import Header from "../components/homecomps/Header";
import NewsContainer from "../components/news/NewsContainer";
import MembersContainer from "../components/members/MembersContainer";
import ProjectContainer from "../components/projects/ProjectContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <NewsContainer />
      <MembersContainer />
      <ProjectContainer />
    </div>
  );
}
