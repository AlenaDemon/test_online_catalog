import { RatingUser } from "../../../assets/ratingUser";

export function ProductReviewForm() {
  return (
    <section className="pb-20">
      <div className="flex flex-col items-center w-full">
        <div className="bg-white w-full max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="font-bold text-lg text-[#414141]">Ваша оценка</h2>
            <RatingUser />
          </div>

          <textarea
            className="w-full h-32 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#70C05B] resize-none"
            placeholder="Отзыв"
          />

          <button className="mt-4 bg-[#FCD5BA] text-[#FF6633] hover:text-white text-sm font-medium px-6 py-2 rounded hover:bg-[#f97e2c] transition">
            Отправить отзыв
          </button>
        </div>
      </div>
    </section>
  );
}
