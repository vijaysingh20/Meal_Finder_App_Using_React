import React, { useState } from "react";

const SearchBarAndShuffle = ({ onSearch, onShuffle }) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    let { value } = e.target;
    setSearch(value);
  };

  const handleClick = () => {
    onSearch(search);
    setSearch("");
  };

  return (
    <>
      <div className="search-bar">
        <div className="form">
          <input
            value={search}
            type="text"
            onChange={handleChange}
            placeholder="Search for meals or keywords"
          />
          <button className="search-btn" onClick={handleClick}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div>
          <button className="shuffle-btn" onClick={onShuffle}>
            <i className="fa fa-random"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBarAndShuffle;
