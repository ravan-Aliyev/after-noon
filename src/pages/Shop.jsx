import Header from "../components/Shop/Header";
import Main from "../components/Shop/Main";
import { allProducts } from "../db/AllProduct";
import AniPage from "./AnimationPage";

function Shop() {
  return (
    <AniPage>
      <Header />
      <Main products={allProducts} />
    </AniPage>
  );
}

export default Shop;
