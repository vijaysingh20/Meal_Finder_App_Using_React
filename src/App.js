import React, { useState } from "react";
import Title from "./components/Title";
import SearchBarAndShuffle from "./components/SearchBarAndShuffle";
import axios from "axios";
import SingleMeal from "./components/SingleMeal";
import Grid from "./components/Grid";
import SearchResultTitle from "./components/SearchResultTitle";

const App = () => {
  const [data, setData] = useState(null);
  const [searched, setSearched] = useState(null);
  const [single, setSingle] = useState(null);

  const onSearch = (search) => {
    setSearched(search);
    if (search?.trim()) {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
        .then((res) => res?.data?.meals)
        .then((d) => setData(d))
        .catch((d) => console.log(d));
    } else {
      alert("Please enter a search item..");
      return;
    }
  };

  const onShuffle = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res?.data?.meals)
      .then((d) => setData(d))
      .catch((d) => console.log(d));
  };
  console.log(single);

  return (
    <div className="main-container">
      <Title />
      <SearchBarAndShuffle onSearch={onSearch} onShuffle={onShuffle} />
      <SearchResultTitle data={data} searched={searched} />
      <Grid onChange={setSingle} data={data} />
      <SingleMeal {...single} />
    </div>
  );
};

export default App;
