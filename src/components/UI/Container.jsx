import classes from "./Container.module.scss";

function Container(props) {
  const containerClass = `${classes.container} ${props.className || ""}`;
  return (
    <>
      <div className={containerClass} style={props.style}>
        {props.children}
      </div>
    </>
  );
}

export default Container;
