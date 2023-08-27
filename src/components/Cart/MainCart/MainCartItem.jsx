import { FaX } from "react-icons/fa6";
import Input from "../../UI/Input";
import classes from "./MainCartItem.module.scss";
import { cartActions } from "../../../store/cart-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

function MainCartItem({ item }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(item.amount);

  const increment = () => {
    if (value === 6) return;
    setValue((preState) => (preState += 1));
    dispatch(cartActions.incraseItem(item.id));
  };
  const decrement = () => {
    if (value === 1) return;
    setValue((preState) => (preState -= 1));
    dispatch(cartActions.removeItem(item.id));
  };

  const updateHandler = () => {
    dispatch(
      cartActions.updateItem({
        ...item,
        amount: value,
      })
    );
  };

  const clearHandler = () => {
    dispatch(cartActions.clearItem(item.id));
  };
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <img src={item.img} alt="" />
        <div className={classes.name}>
          <p>{item.name}</p>
          <p>Color: {item.color}</p>
        </div>
      </div>
      <div className={classes.details}>
        <Input
          defaultValue={value}
          onRemove={decrement}
          onAdd={increment}
          setValue={setValue}
          onUpdate={updateHandler}
        />
        <p className={classes.price}>${item.price.toFixed(2)}</p>
        <span onClick={clearHandler} style={{ cursor: "pointer" }}>
          <FaX />
        </span>
      </div>
    </div>
  );
}

export default MainCartItem;
