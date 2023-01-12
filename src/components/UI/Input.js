import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input type="text" {...props.input} />
      {/* {...props.input} 모든 키-쌍은 props.input에서 받아온건데, 프롭으로 input에 추가된ㄷㅏ.. */}
    </div>
  );
};

export default Input;
