import ProductItem from "../ProductItem/ProductItem";
import classes from "./AllProducts.module.scss";

function AllProducts({ products, style }) {
  return (
    <section className={classes.section} style={style}>
      <div className={classes.container}>
        {products.map((pro, i) => {
          return <ProductItem product={pro} key={i} />;
        })}
      </div>
    </section>
  );
}

export default AllProducts;
