import ProductItem from "../../ProductItem/ProductItem";
import Container from "../../UI/Container";
import classes from "./Bestsellers.module.scss";

function Bestsellers({ products }) {
  return (
    <section className={classes.section}>
      <h2 className="heading-h2">Bestsellers</h2>
      <Container className={classes.container}>
        {products.slice(0, 4).map((item, i) => (
          <ProductItem product={item} key={i} />
        ))}
      </Container>
    </section>
  );
}

export default Bestsellers;
