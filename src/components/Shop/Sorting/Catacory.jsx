import { useEffect, useState } from "react";
import classes from "./Catacory.module.scss";

function Catacory({ catacory, setCatecory, activeCatacory }) {
  const handler = (e) => {
    setCatecory(e.target.value);
  };

  return (
    <ul className={classes.catecoryList}>
      <li className={classes.catecoryItems}>
        <input
          type="radio"
          value="all"
          onChange={handler}
          id="all"
          name="catacory"
          checked={activeCatacory === "all"}
        />
        <label htmlFor="all">All</label>
      </li>

      {catacory.map((item) => (
        <li key={item}>
          <input
            type="radio"
            value={item}
            onChange={handler}
            id={item}
            name="catacory"
            checked={activeCatacory === item}
          />
          <label htmlFor={item}>{item}</label>
        </li>
      ))}
    </ul>
  );
}

export default Catacory;
