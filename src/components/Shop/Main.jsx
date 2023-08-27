import { useEffect, useState } from "react";
import Container from "../UI/Container";
import AllProducts from "./AllProducts";
import classes from "./Main.module.scss";
import Sorting from "./Sorting/Sorting";
import { useLocation } from "react-router-dom";

function Main({ products }) {
  const [catecory, setCatecory] = useState("all");
  const [price, setPrice] = useState([30, 600]);
  const [colors, setColors] = useState([]);

  const [clear, setClear] = useState(false);
  const [resetPrice, setResetPrice] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const location = useLocation().pathname.replace("/", "");

  const catecoryHandler = (catecory) => {
    setCatecory(catecory);
  };

  const priceHandler = (minVal, maxVal) => {
    setPrice([minVal, maxVal]);
  };

  const colorHandler = (color) => {
    setColors(color);
  };

  const applyFilter = () => {
    let pro = products;

    if (catecory) {
      if (catecory === "all") {
        pro = products;
      } else {
        pro = pro.filter((item) =>
          item.catecory.some((item) => item === catecory)
        );
      }
    }

    if (price.length) {
      const min = price[0];
      const max = price[1];

      pro = pro.filter((item) => item.price >= min && item.price <= max);
    }

    if (colors.length) {
      pro = pro.filter((item) =>
        item.products.some((pro) =>
          colors.some((item) => item === pro.color.colorName)
        )
      );
    }

    if (location !== "shop") {
      pro = pro.filter((item) =>
        item.catecory.some((item) => item === location)
      );
    }

    setFilteredProducts(pro);
  };

  useEffect(() => {
    applyFilter();
    if (
      colors.length ||
      price[0] !== 30 ||
      price[1] !== 600 ||
      catecory !== "all"
    ) {
      setClear(true);
    } else {
      setClear(false);
    }
  }, [colors, price, catecory]);

  const clearFilterHandler = () => {
    setCatecory("all");
    setColors([]);
    setResetPrice(true);
  };

  // console.log(
  //   products.filter((item) => item.catecory.some((item) => item === "rugs"))
  // );

  // console.log(
  //   products.filter((item) =>
  //     item.products.some((pro) =>
  //       ["Beige", "White", "Bronze", "Gold"].some(
  //         (item) => item === pro.color.colorName
  //       )
  //     )
  //   )
  // );

  return (
    <main className={classes.main}>
      <Container>
        <div className={classes.container}>
          {location === "shop" && (
            <div className={classes.sortContainer}>
              <Sorting
                products={products}
                catacoryValue={catecory}
                resetPrice={[resetPrice, setResetPrice]}
                colorsValue={colors}
                catecoryHandler={catecoryHandler}
                priceHandler={priceHandler}
                colorHandler={colorHandler}
              />
              {clear && (
                <button onClick={clearFilterHandler}>
                  Clear filters
                  <span style={{ fontWeight: 600, fontSize: "2rem" }}> x</span>
                </button>
              )}
            </div>
          )}
          <AllProducts
            products={filteredProducts}
            style={{ padding: location === "shop" ? "5rem" : "" }}
          />
        </div>
      </Container>
    </main>
  );
}

export default Main;
