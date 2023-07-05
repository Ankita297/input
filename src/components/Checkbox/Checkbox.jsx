import { useState } from "react";
import classes from "./style.module.css";
import clsx from "clsx";
export const Checkbox = ({ title }) => {
  const [check, setCheck] = useState(false);

  return (
    <div className={clsx(classes.checkbox)}>
      <div
        className={clsx(classes.checkInput, check && classes.checkedInput)}
        onClick={() => {
          setCheck((prev) => !prev);
        }}
      >
        &nbsp;
      </div>
      <p className={classes.title}>{title}</p>
    </div>
  );
};
