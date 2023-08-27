import { useState } from "react";
import Catacory from "./Catacory";
import Color from "./Color";
import Price from "./Price";
import classes from "./Sorting.module.scss";
import { AnimatePresence, motion as m } from "framer-motion";

function Sorting({
  products,
  catecoryHandler,
  priceHandler,
  colorHandler,
  colorsValue,
  catacoryValue,
  resetPrice,
}) {
  const catacories = Array.from(
    new Set(products.flatMap((item) => item.catecory))
  );

  const colors = Array.from(
    new Set(products.flatMap((item) => item.products.map((item) => item.color)))
  );

  const [colorName, setColorName] = useState(null);

  const sortingComponents = [
    {
      header: "Catacory",
      component: (
        <Catacory
          catacory={catacories}
          setCatecory={catecoryHandler}
          activeCatacory={catacoryValue}
        />
      ),
    },
    {
      header: "Price",
      component: (
        <Price
          min={30}
          max={600}
          setPrice={priceHandler}
          resetPrice={resetPrice}
        />
      ),
    },
    {
      header: "Color",
      component: (
        <Color
          activeColor={colorsValue}
          colors={colors}
          setColors={colorHandler}
          setColorName={setColorName}
        />
      ),
    },
  ];

  const [active, setActive] = useState([true, false, false]);

  const clickHandler = (index) => {
    const newStyle = [...active];
    newStyle[index] = !newStyle[index];
    setActive(newStyle);
  };

  return (
    <section className={classes.section}>
      <h2 className="heading-h2">Filter by</h2>
      {sortingComponents.map((components, index) => {
        return (
          <div className={classes.container} key={index}>
            <h3 className="heading-h3">
              <button onClick={() => clickHandler(index)}>
                <span>{`${components.header}${
                  colorName && components.header === "Color"
                    ? `: ${colorName}`
                    : ""
                }`}</span>
                <span style={{ fontSize: "3rem" }}>
                  {active[index] ? "-" : "+"}
                </span>
              </button>
            </h3>

            <AnimatePresence>
              {active[index] && (
                <m.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  {components.component}
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </section>
  );
}

export default Sorting;
