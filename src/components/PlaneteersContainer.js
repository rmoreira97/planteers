import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers, searchTerm }) {
  const filteredPlaneteers = planeteers.filter(
    (planeteer) =>
      planeteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlaneteers.map((planeteer) => (
        <Planeteer key={planeteer.id} planeteer={planeteer} />
      ))}
    </ul>
  );
}

export default PlaneteersContainer;
