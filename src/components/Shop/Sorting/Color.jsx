import { useEffect, useState } from "react";
import classes from "./Color.module.scss";

function Color({ colors, setColors, setColorName, activeColor }) {
  const [color, setColor] = useState([]);

  const colorHandler = (e) => {
    const newValue = e.target.value;
    setColor((preState) => {
      if (e.target.checked) {
        return [...preState, newValue];
      } else {
        return preState.filter((item) => item !== newValue);
      }
    });
  };

  useEffect(() => {
    setColors(color);
  }, [color]);

  return (
    <div className={classes.color}>
      <ul>
        {colors.map((color) => {
          return (
            <li key={color.colorCode}>
              <input
                type="checkbox"
                id={color.colorName}
                value={color.colorName}
                onChange={colorHandler}
                checked={activeColor.includes(color.colorName)}
              />
              <label
                onMouseOver={(e) => setColorName(e.target.htmlFor)}
                onMouseOut={() => setColorName(null)}
                htmlFor={color.colorName}
                style={{ backgroundColor: `${color.colorCode}` }}
              ></label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Color;
