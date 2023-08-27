import { useSelector } from "react-redux";
import Button from "../../UI/Button";
import classes from "./MainCart.module.scss";
import MainCartItem from "./MainCartItem";
import { Link } from "react-router-dom";
function MainCart() {
  const items = useSelector((state) => state.cart);
  return (
    <section className={classes.section}>
      <div
        className={classes.container}
        style={{ flexWrap: !items.items.length ? "wrap" : "nowrap" }}
      >
        {items.items.length ? (
          <>
            <div className={classes.items}>
              <p>My Cart</p>
              {items.items.map((item) => {
                return <MainCartItem item={item} key={item.id} />;
              })}
            </div>

            <div className={classes.order}>
              <p>Order Summary</p>
              <p className={classes.subtotal}>
                <span>Subtotal:</span>
                <span>${items.totalValue.toFixed(2)}</span>
              </p>

              <div>
                <p className={classes.total}>
                  <span>Total:</span>
                  <span>${items.totalValue.toFixed(2)}</span>
                </p>
                <Button>Checkout</Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <p
              style={{
                fontSize: "1.9rem",
                padding: "2rem 0",
                borderBottom: "1px solid rgba(0, 0, 0, 0.7)",
                width: "100%",
              }}
            >
              My Cart
            </p>
            <div className={classes.empty}>
              <p>Cart is empty</p>
              <Link to="/">Continute browsing</Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default MainCart;
