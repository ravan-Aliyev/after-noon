import classes from "./HeaderNav.module.scss";
import { PiRugLight } from "react-icons/pi";
import { MdOutlineLight } from "react-icons/md";
import { TfiTicket } from "react-icons/tfi";
import { BiCabinet } from "react-icons/bi";

import { Link } from "react-router-dom";
import Container from "../../UI/Container";

const headerLinks = [
  {
    linkName: "Furniture",
    path: "/furniture",
    icon: <BiCabinet />,
  },
  {
    linkName: "Lightning",
    path: "/lightning",
    icon: <MdOutlineLight />,
  },
  {
    linkName: "Rugs",
    path: "/rugs",
    icon: <PiRugLight />,
  },
  {
    linkName: "Sale",
    path: "/sale",
    icon: <TfiTicket />,
  },
];

function HeaderNav() {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <ul className={classes.navigation}>
          {headerLinks.map((link) => {
            return (
              <li key={link.linkName}>
                {link.icon}
                <Link to={link.path}>{link.linkName}</Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default HeaderNav;
