import classes from "./Header.module.scss";
import HeaderNav from "./HeaderNav";
import Hero from "./Hero";

function Header() {
  return (
    <header className={classes.header}>
      <Hero />
      <HeaderNav />
    </header>
  );
}

export default Header;
