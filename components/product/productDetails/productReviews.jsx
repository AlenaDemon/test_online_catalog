import { UserSvg } from "../../../assets/userSvg";
import { RatingProduct } from "../../../assets/ratingProduct";

export function ProductReviews({ reviews }) {
  if (!reviews?.length) return null;

  return (
    <section className="py-10">
      <h2 className="font-bold text-4xl leading-[150%] mb-10 text-[#414141]">
        Отзывы
      </h2>

      <div className="flex flex-col items-center gap-10">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white w-full max-w-2xl mb-4">
            <div className="flex items-center mb-2">
              <div className="border rounded-2xl border-[#F3F2F1] p-1.5 mr-2">
                <UserSvg />
              </div>
              <p className="font-medium text-base">{review.reviewerName}</p>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <RatingProduct value={review.rating} />
              <p className="text-xs text-[#8F8F8F]">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>

            <p className="font-normal text-base leading-[150%]">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
