import React from 'react'

const Modal = (props) => {
    const classes = "modal " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Modal
