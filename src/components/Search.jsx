import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <div className="search">
        <img src="/assets/search.svg" alt="Search" className="ml-2" />
        <input
          type="text"
          placeholder="search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
