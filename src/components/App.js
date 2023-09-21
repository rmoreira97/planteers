import React, { useState, useEffect } from "react";
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then((response) => response.json())
      .then((data) => setPlaneteers(data));
  }, []);

  return (
    <div>
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteers} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
