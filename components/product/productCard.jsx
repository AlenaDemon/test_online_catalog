import { useRouter } from "next/router";
import { LikeSvg } from "../../assets/likeSvg";
import { toast } from "react-toastify";
import { RatingProduct } from "../../assets/ratingProduct";

export function ProductCard({ product }) {
  const router = useRouter();

  const openProduct = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div
      onClick={openProduct}
      className="bg-white rounded shadow p-3 sm:px-4 flex flex-col justify-between relative cursor-pointer hover:shadow-lg transition"
    >
      <button
        className="absolute top-2 right-2 p-1 cursor-pointer bg-[#F3F2F1] rounded flex justify-center items-center transition"
        onClick={(e) => {
          e.stopPropagation();
          toast.success("Добавлено в избранное!");
        }}
      >
        <LikeSvg />
      </button>

      <div className="w-24 h-24 mb-2 self-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <p className=" text-[#414141] text-lg font-bold leading-[150%]">
            {product.discountPercentage}$
          </p>
          <p className="text-xs text-gray-600">С картой</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[#414141] text-lg font-bold leading-[150%]">
            ${product.price}
          </p>
          <p className="font-montserrat text-xs text-gray-600">Обычная</p>
        </div>
      </div>

      <h2 className="my-2 text-[#414141] font-medium text-base leading-[150%]">
        {product.title}
      </h2>
      <RatingProduct />

      <button
        onClick={(e) => {
          e.stopPropagation();
          toast.success("Добавлено в корзину!");
        }}
        className="my-2 rounded border cursor-pointer border-[#70C05B] hover:border-[#FF6633] hover:bg-[#FF6633] hover:text-white p-2"
      >
        В корзину
      </button>
    </div>
  );
}
