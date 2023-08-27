import classes from "./ProductModal.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { motion as m } from "framer-motion";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const backdropVariant = {
  init: { opacity: 0 },
  ani: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.5 } },
};

const modalVariant = {
  init: { opacity: 0 },
  ani: { opacity: 1, transition: { delay: 0.5 } },
  exit: { opacity: 0 },
};

function ProductModal({ onModalOpen, product }) {
  const [opacity, setOpacity] = useState(0);
  const imgs = product.products.flatMap((item) => item.imgUrl);
  const colors = product.products.map((item) => item.color);
  const [selectedColor, setSelectedColor] = useState(null);

  const inputRef = useRef();
  const dispatch = useDispatch();

  const colorHandler = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const closeModal = (e) => {
    if (e.target.closest("#backdrop") !== e.target) return;
    onModalOpen(false);
  };

  const filteredImg = selectedColor
    ? product.products.filter(
        (item) => item.color.colorName === selectedColor.colorName
      )[0].imgUrl
    : imgs;

  const addCart = () => {
    if (!selectedColor) return;

    const item = {
      img: filteredImg[0],
      name: product.productName,
      id: `${product.id}${selectedColor.colorName}`,
      amount: +inputRef.current.value,
      price: product.price,
      totalPrice: product.price,
      color: selectedColor.colorName,
    };

    dispatch(cartActions.addItem(item));
  };

  return (
    <>
      <m.div
        className={classes.backdrop}
        onClick={closeModal}
        variants={backdropVariant}
        id="backdrop"
        initial="init"
        animate="ani"
        exit="exit"
        when="beforeChildren"
        transition={{ duration: 0.5 }}
      >
        <m.div
          className={classes.modal}
          variants={modalVariant}
          transition={{ duration: 0.5 }}
        >
          <div className={classes.imgs}>
            <div className={classes.img}>
              {filteredImg.map((img, i) => {
                return (
                  <img
                    src={img}
                    alt=""
                    key={i}
                    style={{
                      opacity: opacity === i ? 1 : 0,
                    }}
                  />
                );
              })}
            </div>
            <div className={classes.dots}>
              {filteredImg.map((img, i) => {
                if (filteredImg.length > 1) {
                  return (
                    <span
                      key={i}
                      onClick={() => setOpacity(i)}
                      style={{ opacity: opacity === i ? 1 : 0.5 }}
                    ></span>
                  );
                }
              })}
            </div>
          </div>
          <div className={classes.info}>
            <h3 className="heading-h2">{product.productName}</h3>
            <p className={classes.price}>${product.price.toFixed(2)}</p>
            <p className={classes.sku}>SKU: 001</p>

            <div className={classes.color}>
              <p>Color{selectedColor ? `: ${selectedColor.colorName}` : ""}</p>
              <ul className={classes.colorList}>
                {colors.map((color, i) => {
                  return (
                    <li key={i}>
                      <button onClick={() => colorHandler(color)}>
                        <span
                          style={{
                            backgroundColor: color.colorCode,
                            outline:
                              selectedColor === color
                                ? "1px solid rgb(0, 0, 0)"
                                : "",
                          }}
                        ></span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={classes.quantity}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                defaultValue={1}
                ref={inputRef}
                min={1}
              />
            </div>

            <Button className={classes.cartBtn} onClick={addCart}>
              Add to Cart
            </Button>

            <Link
              to={`/product-page/${product.id}`}
              style={{ textDecoration: "underline" }}
            >
              View more details
            </Link>

            <button className={classes.icon} onClick={() => onModalOpen(false)}>
              <FaX />
            </button>
          </div>
        </m.div>
      </m.div>
    </>
  );
}

export default ProductModal;
