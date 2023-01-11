import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technol=technologies.map((techn)=>(
    <span key={techn}>{techn}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */technol}
      </div>
    </div>
  );
}

export default ProjectItem;
