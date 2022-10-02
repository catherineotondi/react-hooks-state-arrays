

import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    let addedFood = [...foods, newFood];
    setFoods(addedFood);
  }

  function handleDelete(id, heat) {
    // //console.log(id);
    // const toKeep = foods.filter(food=>food.id!==id)
    // // console.log(toKeep);
    // setFoods(toKeep)

    console.log(heat);
    const heatChange = foods.map((food) => {
      if (food.id === id) {
        return { ...food, heatLevel: heat + 1 };
      } else {
        return food;
      }
    });
    setFoods(heatChange);
  }

  function handleCuisine(cuisine){
    console.log(cuisine);
    setFilterBy(cuisine)
    const filter = foods.filter(food=>cuisine===food.cuisine)
    console.log(filter);
    setFoods(filter)
    
  }
  console.log(filterBy);

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleDelete(food.id, food.heatLevel)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" value={filterBy} onChange = {e=>handleCuisine(e.target.value)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;