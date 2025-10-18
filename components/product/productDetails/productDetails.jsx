import { Loader } from "../../loader/loader";
import { ProductHeader } from "./productHeader";
import { ProductMainInfo } from "./productMainInfo";
import { ProductReviews } from "./productReviews";
import { ProductReviewForm } from "./productReviewForm";

export function ProductDetails({ product }) {
  if (!product) return <Loader />;

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <ProductHeader product={product} />
      <ProductMainInfo product={product} />
      <ProductReviews reviews={product.reviews} />
      <ProductReviewForm />
    </div>
  );
}
