import classes from "./Links.module.scss";

function Links({ links, linkHeader }) {
  return (
    <div className={classes.links}>
      <h3 className="heading-h3">{linkHeader}</h3>
      <ul className={classes.list}>
        {links.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Links;
