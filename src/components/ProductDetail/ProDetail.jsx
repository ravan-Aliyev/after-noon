import classes from "./ProDetail.module.scss";
import { useState, useRef } from "react";
import Button from "../UI/Button";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { cartActions } from "../../store/cart-slice";

import { motion as m, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";

function ProDetal({ product }) {
  const [opacity, setOpacity] = useState(0);
  const pro = product[0];
  const imgs = pro.products.flatMap((item) => item.imgUrl);
  const colors = pro.products.map((item) => item.color);
  const [selectedColor, setSelectedColor] = useState(null);

  const inputRef = useRef();
  const dispatch = useDispatch();

  const colorHandler = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const filteredImg = selectedColor
    ? pro.products.filter(
        (item) => item.color.colorName === selectedColor.colorName
      )[0].imgUrl
    : imgs;

  const addCart = () => {
    if (!selectedColor) return;

    const item = {
      img: filteredImg[0],
      name: pro.productName,
      id: `${pro.id}${selectedColor.colorName}`,
      amount: +inputRef.current.value,
      price: pro.price,
      totalPrice: pro.price,
      color: selectedColor.colorName,
    };

    dispatch(cartActions.addItem(item));
  };

  return (
    <section className={classes.section}>
      <div className={classes.imgs}>
        <div className={classes.img}>
          <AnimatePresence mode="wait">
            <m.figure
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={opacity}
              transition={{ duration: 0.2, type: "tween" }}
            >
              <img src={filteredImg[opacity]} alt="" />
            </m.figure>
          </AnimatePresence>
        </div>
        <div className={classes.dots}>
          {filteredImg.map((_, i) => {
            if (filteredImg.length > 1) {
              return (
                <span
                  key={i}
                  onClick={() => setOpacity(i)}
                  style={{
                    backgroundColor: opacity === i ? "rgb(0, 0, 0)" : "",
                  }}
                ></span>
              );
            }
          })}
        </div>

        <div className={classes.description}>
          I'm a product description. I'm a great place to add more details about
          your product such as sizing, material, care instructions and cleaning
          instructions.
        </div>
      </div>
      <div className={classes.info}>
        <h3 className="heading-h2">{pro.productName}</h3>
        <p className={classes.price}>${pro.price.toFixed(2)}</p>
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

        <div className={classes.productDetail}>
          <div>
            <p>Product Info</p>
            <span>+</span>
          </div>
          <div>
            <p>Return & Refund Policy</p>
            <span>+</span>
          </div>
          <div>
            <p>Shipping info</p>
            <span>+</span>
          </div>
        </div>

        <div className={classes.medias}>
          <FaWhatsapp fill="green" />
          <FaFacebookF fill="rgb(10, 10, 159)" />
          <FaTwitter fill="rgb(53, 114, 255)" />
          <FaPinterest fill="rgb(227, 19, 19)" />
        </div>
      </div>
    </section>
  );
}

export default ProDetal;
