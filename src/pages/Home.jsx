import Bestsellers from "../components/Home/Bestsellers/Bestsellers";
import Header from "../components/Home/Header/Header";
import Stories from "../components/Home/Stories/Stories";
import Brands from "../components/Home/Brands/Brands";
import Gallery from "../components/Home/Gallery/Gallery";
import AniPage from "./AnimationPage";
import { allProducts } from "../db/AllProduct";

function HomePage() {
  return (
    <>
      <AniPage>
        <Header />
        <Bestsellers products={allProducts} />
        <Stories />
        <Brands />
        <Gallery />
      </AniPage>
    </>
  );
}

export default HomePage;
