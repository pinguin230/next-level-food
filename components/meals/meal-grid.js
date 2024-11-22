import React from 'react';
import style from "./meals-grid.module.css";
import MealItem from "@/components/meals/meal-item";

const MealGrid = ({meals}) => {
  return (
    <ul className={style.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealGrid;