import { useState } from "react";
import classes from "./Input.module.scss";

function Input({ defaultValue, onRemove, onAdd, onUpdate, setValue }) {
  return (
    <div className={classes.input}>
      <span onClick={() => onRemove()}>-</span>
      <input
        type="number"
        value={defaultValue !== 0 ? defaultValue : ""}
        onChange={(e) => setValue(+e.target.value)}
        min={1}
        onBlur={() => onUpdate()}
      />
      <span onClick={() => onAdd()}>+</span>
    </div>
  );
}

export default Input;
