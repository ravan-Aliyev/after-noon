import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./ProductItem.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <ProductModal
            open={modalOpen}
            onModalOpen={setModalOpen}
            product={product}
          />
        )}
      </AnimatePresence>
      <div className={classes.container}>
        <m.div
          className={classes.proImg}
          whileHover={{
            backgroundImage: `url(${product.products[0].imgUrl[1]})`,
          }}
        >
          <LazyLoadImage
            alt="product-img"
            src={product.products[0].imgUrl[0]}
            effect="blur"
            width={"100%"}
            className={classes.lazyImg}
          />

          <button className={classes.view} onClick={() => setModalOpen(true)}>
            Quick view
          </button>
        </m.div>

        <div className={classes.proName}>
          <Link to={`/product-page/${product.id}`}>
            <h3 className="heading-h3">{product.productName}</h3>
          </Link>
        </div>

        <div className={classes.price}>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
