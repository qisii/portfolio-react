import React from "react";
import { projectsData } from "./Data";
import WorkItems from "./WorkItems";
import "./work.css";

const Works = () => {
  return (
    <div className="work_container container grid">
      {projectsData.map((item) => {
        return <WorkItems item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Works;
