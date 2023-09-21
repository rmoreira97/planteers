import React from "react";

function SearchBar({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        onChange={handleSearch}
        placeholder="Search Planeteer..."
      />
    </div>
  );
}

export default SearchBar;
