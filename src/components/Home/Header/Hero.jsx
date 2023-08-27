import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./Hero.module.scss";
import { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";

const imgs = [
  {
    imgUrl:
      "https://static.wixstatic.com/media/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg/v1/fill/w_1899,h_1180,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea26fd_6a75d4e07469483aadda0a0a67b00be5~mv2.jpg",
  },
  {
    imgUrl:
      "https://static.wixstatic.com/media/ea26fd_addcfc18fdac465b8391994a87de69cf~mv2.jpg/v1/fill/w_1899,h_1180,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea26fd_addcfc18fdac465b8391994a87de69cf~mv2.jpg",
  },
  {
    imgUrl:
      "https://static.wixstatic.com/media/ea26fd_e64f9090f546456aa2dfbb7717f260d7~mv2.jpg/v1/fill/w_1899,h_1180,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea26fd_e64f9090f546456aa2dfbb7717f260d7~mv2.jpg",
  },
];

function Hero() {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = imgs.length - 1;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (curSlide !== maxSlide) {
        setCurSlide((prevState) => (prevState += 1));
      } else {
        setCurSlide(0);
      }
    }, 7000);

    return () => {
      clearTimeout(timeout);
    };
  }, [curSlide]);

  return (
    <section className={classes.section}>
      <div className={classes.heroImg}>
        {imgs.map((img, i) => {
          return (
            <m.img
              src={img.imgUrl}
              alt=""
              key={i}
              animate={{ translateX: `${100 * -curSlide}%` }}
              transition={{
                type: "tween",
                duration: 1.5,
              }}
            />
          );
        })}
      </div>
      <div className={classes.heroContent}>
        <h1 className="heading-h1">The Annual Holiday Sale</h1>
        <p>I'm a title. Click here to add your own text and edit me.</p>
        <Link to="/shop">
          <Button>Shop Now</Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;

//

//
