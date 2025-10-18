import { RatingProduct } from "../../../assets/ratingProduct";
import { FeatherSvg } from "../../../assets/featherSvg";
import { LikeSvg } from "../../../assets/likeSvg";

export function ProductHeader({ product }) {
  const countReviews = product.reviews.length;

  return (
    <>
      <h1 className="font-bold text-2xl leading-[150%] mb-4 text-[#414141]">
        {product.title}
      </h1>

      <div className="flex flex-wrap gap-6 mb-6 items-center text-[#414141]">
        <div className="text-xs text-gray-500">арт. 371431</div>

        <div className="flex gap-2 items-center">
          <RatingProduct />
          <span className="text-xs">{`${countReviews} отзыва`}</span>
        </div>

        <div className="flex gap-2 items-center cursor-pointer hover:text-[#FF6633] transition">
          <FeatherSvg />
          <span className="text-xs">Поделиться</span>
        </div>

        <div className="flex gap-2 items-center cursor-pointer hover:text-[#FF6633] transition">
          <LikeSvg />
          <span className="text-xs">В избранное</span>
        </div>
      </div>
    </>
  );
}
