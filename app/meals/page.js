import React, {Suspense} from 'react';
import style from "./page.module.css";
import Link from "next/link";
import MealGrid from "@/components/meals/meal-grid";
import {getMeals} from "@/lib/meals";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

const Meals = async () => {
  const meals = await getMeals();

  return (
    <MealGrid meals={meals}/>
  );
};

const MealsPage = async () => {

  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created <span className={style.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={style.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={style.main}>
        <Suspense fallback={<p className={style.loading}> Fetching meals... </p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;