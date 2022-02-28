import React from "react";

const SingleMeal = (props) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const item = "strIngredient" + i;
    ingredients[i - 1] = props[item];
  }

  if (!props.idMeal) return null;
  return (
    <center className="single-meal">
      <h1>{props.strMeal}</h1>
      <div>
        <img width={300} src={props.strMealThumb} alt={props.strMeal} />
      </div>
      <div className="meal-info">
        <p>{props.strCategory}</p>
        <p>{props.strArea}</p>
      </div>
      <div className="about">
        <p>{props.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>{ingredients.map((e) => (e ? <li key={e}>{e}</li> : null))}</ul>
      </div>
    </center>
  );
};

export default SingleMeal;
