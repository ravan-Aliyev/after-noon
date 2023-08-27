import Container from "../../UI/Container";
import classes from "./Brands.module.scss";
import { motion as m } from "framer-motion";

const brands = [
  {
    brandImg:
      "https://static.wixstatic.com/media/ea26fd_18022929cf50439590be7a3e400b9937~mv2.png/v1/fill/w_136,h_88,al_c,lg_1,q_85,enc_auto/Group%2021.png",
  },
  {
    brandImg:
      "https://static.wixstatic.com/media/ea26fd_004d27d39ea64e26bb2caee886b0fb1b~mv2.png/v1/fill/w_193,h_75,al_c,lg_1,q_85,enc_auto/Group%2032.png",
  },
  {
    brandImg:
      "https://static.wixstatic.com/media/ea26fd_1f6fdb3c9e894340880668a6a3a08953~mv2.png/v1/fill/w_149,h_50,al_c,lg_1,q_85,enc_auto/Group%2012.png",
  },
  {
    brandImg:
      "https://static.wixstatic.com/media/ea26fd_0e3964d48ab041828bff261fafe351fc~mv2.png/v1/fill/w_138,h_95,al_c,lg_1,q_85,enc_auto/Group%203.png",
  },
  {
    brandImg:
      "https://static.wixstatic.com/media/ea26fd_b40bb7f5a4c946848c4eeecda647b894~mv2.png/v1/fill/w_203,h_25,al_c,lg_1,q_85,enc_auto/Group%2018.png",
  },
];

const imgVariants = {
  init: { opacity: 0, x: -100 },
  ani: { opacity: 1, x: 0 },
};

function Brands() {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <div className={classes.header}>
          <h2 className="heading-h2">Brands & Designers</h2>
        </div>
        <ul className={classes.list}>
          {brands.map((item, i) => {
            return (
              <li key={i} className={classes.item}>
                <m.img
                  src={item.brandImg}
                  variants={imgVariants}
                  initial="init"
                  whileInView="ani"
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 * (i * 0.5),
                    type: "tween",
                    duration: 1,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default Brands;
