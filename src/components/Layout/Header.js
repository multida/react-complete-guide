import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg"; //로컬에서 불러올때는 이렇게 import 사용하기
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <button>Cart</button>
      </header>
      ;
      <div className={classes["main-image"]}>
        {/* 클래스 이름이 main-image 일땐 [ ] 안으로 넣어주면 됨! */}
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
