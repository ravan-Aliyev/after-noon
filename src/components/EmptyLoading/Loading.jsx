import React from "react";
import classes from "./Loading.module.scss";

function Loading() {
  return (
    <section className={classes.section}>
      <div className={classes["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Loading;
