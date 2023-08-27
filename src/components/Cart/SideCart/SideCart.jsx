import Button from "../../UI/Button";
import { motion as m } from "framer-motion";
import classes from "./SideCart.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import SideCartItem from "./SideCartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const backdropVariants = {
  init: { opacity: 0 },
  ani: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  init: { x: "100%" },
  ani: { x: 0 },
  exit: { x: "100%" },
};

function SideCart({ setCartOpen }) {
  const closeModal = (e) => {
    if (e.target.closest("#backdrop") !== e.target) return;
    setCartOpen(false);
  };

  const items = useSelector((state) => state.cart);

  return (
    <m.div
      className={classes.backdrop}
      onClick={closeModal}
      id="backdrop"
      variants={backdropVariants}
      initial="init"
      animate="ani"
      exit="exit"
    >
      <m.div
        className={classes.modal}
        variants={modalVariants}
        transition={{ type: "tween" }}
      >
        <div className={classes.container}>
          <div className={classes.header}>
            <button onClick={() => setCartOpen(false)}>
              <MdKeyboardArrowRight />
            </button>
            <h3 className="heading-h3">Cart</h3>
          </div>

          {items.items.length ? (
            <>
              <div className={classes.item}>
                <div className={classes.itemsContainer}>
                  {items.items.map((item) => (
                    <SideCartItem key={item.id} item={item} />
                  ))}
                </div>
                <div className={classes.total}>
                  <p>Subtotal</p>
                  <p>${items.totalValue.toFixed(2)}</p>
                </div>
              </div>
              <div className={classes.button}>
                <Link to="/cart" onClick={() => setCartOpen(false)}>
                  <Button>View Cart</Button>
                </Link>
              </div>
            </>
          ) : (
            <p style={{ margin: "0 auto", padding: "2rem" }}>Cart is empty</p>
          )}
        </div>
      </m.div>
    </m.div>
  );
}

export default SideCart;
