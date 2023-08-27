import Container from "../UI/Container";
import classes from "./Header.module.scss";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation().pathname.replace("/", "");

  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.container}>
          <h1 className="heading-h1" style={{ textTransform: "capitalize" }}>
            {location}
          </h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Header;
