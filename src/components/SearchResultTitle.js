import React from "react";

const SearchResultTitle = ({ data, searched }) => {
  const head1 = `Search results for '${searched}'`;
  if (searched == null) {
    return null;
  } else if (!data && searched) {
    return <p>There are no search results. Try again!</p>;
  } else {
    return <h2>{head1}</h2>;
  }
  return <></>;
};

export default SearchResultTitle;
