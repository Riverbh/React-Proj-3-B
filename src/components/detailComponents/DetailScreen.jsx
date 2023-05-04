import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailScreen = () => {  
  const [recipe, setRecipe] = useState({})
  // const { id } = useParams()

  useEffect(() => {
    axios
      .get("https://recipes.devmountain.com/recipes/${id}")
      .then((res) => {
        setRecipe(res.data)
      })
  }, [] )

  return (
    <section>
      {recipe.ingredients && recipe.ingredients.map((ing, index) => {
        return <h4>{ing.quantity} {ing.ingredients}</h4>
      })}
      <p style={{ whiteSpace: "pre-wrap" }}>
        {recipe.instructions && JSON.parse(recipe.instructions)}
      </p>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
    </section>
  );
};

export default DetailScreen;
