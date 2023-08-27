import { useParams } from "react-router-dom";
import ProDetail from "../components/ProductDetail/ProDetail";
import AniPage from "./AnimationPage";
import { allProducts } from "../db/AllProduct";

function ProductDetailPage() {
  const params = useParams().proId;

  const product = allProducts.filter((item) => item.id === params);
  return (
    <AniPage>
      <ProDetail product={product} />
    </AniPage>
  );
}

export default ProductDetailPage;
