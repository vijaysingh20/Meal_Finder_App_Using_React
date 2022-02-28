import React from "react";

const Grid = ({ data, onChange }) => {
  return (
    <>
      <div className="flex-wrap">
        {data?.map((item, index) => {
          return <Card onChange={onChange} key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default Grid;

const Card = (props) => {
  const handleClick = () => {
    props.onChange(props);
  };

  return (
    <div className="flex-item" onClick={handleClick}>
      <img
        className="image"
        width="180"
        src={props?.strMealThumb}
        alt={props.strMeal}
      />
      <div className="overlay-item">
        <strong>{props.strMeal}</strong>
      </div>
    </div>
  );
};
