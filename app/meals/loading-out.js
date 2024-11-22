import React from 'react';
import style from "./loading.module.css";

const MealsLoadingPage = () => {
  return (
    <p className={style.loading}> Fetching meals... </p>
  );
};

export default MealsLoadingPage;