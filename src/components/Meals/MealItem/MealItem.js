import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; //항상 소수점 이하 두자리까지만 렌더링
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
