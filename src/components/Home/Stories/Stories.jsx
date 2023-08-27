import Container from "../../UI/Container";
import classes from "./Stories.module.scss";
import Button from "../../UI/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion as m } from "framer-motion";

const storyVariant = {
  init: { opacity: 0, x: -100 },
  ani: { opacity: 1, x: 0 },
};

function Stories() {
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <m.div
          className={classes.storyContainer}
          variants={storyVariant}
          initial="init"
          whileInView="ani"
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1, type: "tween" }}
          style={{ flexDirection: "column" }}
        >
          <div className={classes.info}>
            <h2 className="heading-h2">Cozy Sophistication</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <Button>Shop Furniture</Button>
          </div>
          <div className={classes.img}>
            <LazyLoadImage
              alt="img"
              src="https://static.wixstatic.com/media/ea26fd_e3f9fefad6b445a68e393cabe81f156f~mv2.jpg/v1/crop/x_571,y_1166,w_3260,h_4580/fill/w_500,h_700,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Soft%20Couch.jpg"
              effect="blur"
            />
          </div>
        </m.div>
      </Container>
      <Container className={classes.container}>
        <m.div
          className={classes.storyContainer}
          variants={storyVariant}
          initial="init"
          whileInView="ani"
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1, type: "tween" }}
        >
          <div className={classes.info}>
            <h2 className="heading-h2">Cozy Sophistication</h2>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </p>
            <Button>Read Story</Button>
          </div>

          <div className={classes.img}>
            <LazyLoadImage
              alt="img"
              src="https://static.wixstatic.com/media/ea26fd_b7296294ef234ffa9c573860a78b9a10~mv2.jpg/v1/crop/x_1294,y_0,w_2621,h_3473/fill/w_500,h_663,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Woman%20Interior.jpg"
              effect="blur"
            />
          </div>
        </m.div>
      </Container>
    </section>
  );
}

export default Stories;
