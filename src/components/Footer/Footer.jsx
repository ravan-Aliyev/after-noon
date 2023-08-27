import Container from "../UI/Container";
import classes from "./Footer.module.scss";
import Button from "../UI/Button";
import Links from "./Links";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/svg/logo";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const footerLinks = [
  {
    linkHeader: "Shop",
    links: ["Furniture", "Lightning", "Rugs", "New", "Sale"],
  },
  {
    linkHeader: "Costumer Service",
    links: ["Shipping & Returns", "Store Policy", "Payment Methods", "FAQ"],
  },
  {
    linkHeader: "Abour After.noon",
    links: ["Our Story", "Brands & Designers", "Stores", "Contact"],
  },
];

function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <div className={classes.signup}>
          <h3 className="heading-h3">Sighn Up to Our Newsletter</h3>
          <div>
            <label htmlFor="sign">Email*</label>
            <input type="email" id="sign" />
            <Button>Submit</Button>
          </div>
        </div>
        <div className={classes.linkContainer}>
          {footerLinks.map((link) => (
            <Links
              links={link.links}
              linkHeader={link.linkHeader}
              key={link.linkHeader}
            />
          ))}
        </div>
      </Container>
      <Container className={classes.container}>
        <div className={classes.info}>
          <LogoSvg />
          <Link className={classes["nav-button"]}>
            <p>After.noon</p>
          </Link>
          <p className={classes.adress}>
            <span>500 Terry Francine Street, San Francisco, CA 94158</span>
            <span>123-456-7890 / info@my-domain.com</span>
          </p>
        </div>
        <div className={classes.medias}>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </Container>
      <div className={classes.copyContainer}>
        <Container>
          <div className={classes.copyright}>
            <p>&copy; 2035 by Afternoon. Powered and secured by Wix</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
