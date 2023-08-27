import { useDispatch, useSelector } from "react-redux";
import Input from "../../UI/Input";
import classes from "./SideCartItem.module.scss";
import { cartActions } from "../../../store/cart-slice";
import { useState } from "react";

function SideCartItem({ item }) {
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
      <img src={item.img} />
      <div className={classes.info}>
        <p>{item.name}</p>
        <p style={{ fontWeight: 600 }}>${item.price.toFixed(2)}</p>
        <Input
          defaultValue={value}
          onRemove={decrement}
          onAdd={increment}
          setValue={setValue}
          onUpdate={updateHandler}
        />
      </div>
      <button onClick={clearHandler}>
        <span>x</span>
      </button>
    </div>
  );
}

export default SideCartItem;
