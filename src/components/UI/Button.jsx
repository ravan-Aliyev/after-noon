import classes from "./Button.module.scss";

function Button(props) {
  const btnClass = `${classes.btn} ${props.className || ""}`;
  return (
    <button className={btnClass} style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
