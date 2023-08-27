import { Link } from "react-router-dom";
import classes from "./MainNavigation..module.scss";
import Container from "./UI/Container";
import { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaUser,
  FaShoppingBasket,
} from "react-icons/fa";
import LogoSvg from "../assets/svg/logo";
import { AnimatePresence, motion as m } from "framer-motion";
import SideCart from "./Cart/SideCart/SideCart";
import { useSelector } from "react-redux";

const links = [
  {
    linkName: "Shop all",
    path: "/shop",
  },
  {
    linkName: "Furniture",
    path: "/furniture",
  },
  {
    linkName: "Lighting",
    path: "/lighting",
  },
  {
    linkName: "Rugs",
    path: "/rugs",
  },
  {
    linkName: "About",
    path: "/about",
  },
  {
    linkName: "Stories",
    path: "/stories",
  },
  {
    linkName: "Contact",
    path: "/contact",
  },
];

function MainNavigation() {
  const [navBar, setNavBar] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);

  const [openCart, setOpenCart] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth);

  window.addEventListener("scroll", function () {
    const currentPos = this.window.scrollY;

    if (currentPos > lastPosition && currentPos > 300) {
      setNavBar(false);
    } else {
      setNavBar(true);
    }

    setLastPosition(currentPos);
  });

  if (openCart) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "scroll";
  }
  return (
    <>
      <AnimatePresence mode="wait">
        {openCart && <SideCart setCartOpen={setOpenCart} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {navBar && (
          <m.nav
            className={classes.nav}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.1, ease: "easeIn" }}
          >
            <Container className={`${classes.container}`}>
              <div className={classes.logo}>
                <LogoSvg />
                <Link to="/" className={classes["nav-button"]}>
                  <p>After.noon</p>
                </Link>
              </div>
              <div className={classes.links}>
                <ul className={classes.navigation}>
                  {links.map((link) => {
                    return (
                      <li className={classes.link} key={link.linkName}>
                        <Link to={link.path}>{link.linkName}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Container>
            <Container className={`${classes.container}`}>
              <div className={classes.medias}>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
              <div className={classes.actions}>
                <div className={classes.user}>
                  <FaUser />
                  <Link to={user.user ? "/profile" : "/auth?mode=login"}>
                    {user.user ? user.user.email : "Log In"}
                  </Link>
                </div>
                <button onClick={() => setOpenCart(true)}>
                  <FaShoppingBasket />
                  {items.length ? (
                    <span style={{ fontSize: "1.5rem", marginLeft: "1rem" }}>
                      {items.length}
                    </span>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </Container>
          </m.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainNavigation;
