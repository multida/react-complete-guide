import React, { Fragment } from "react";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const Overlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <Overlays>{props.children}</Overlays>
    </Fragment>
  );
};

export default Modal;
