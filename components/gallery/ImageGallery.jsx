import { useState } from "react";
import { ArrowLeftSvg } from "../../assets/arrowLeftSvg";
import { ArrowRightSvg } from "../../assets/arrowRightSvg";
import { fillImages } from "./fillImages";

export function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesFilledArray = fillImages(images);
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? imagesFilledArray.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === imagesFilledArray.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="flex gap-6 items-start sm:px-4">
      <div className="flex flex-col gap-3 sm:px-4">
        {imagesFilledArray.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-20 h-20 bg-white rounded shadow overflow-hidden border transition-all duration-200 
              ${
                currentIndex === i
                  ? "border-[#70C05B]"
                  : "border-transparent hover:border-gray-300"
              }`}
          >
            <img
              src={img}
              alt={`thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="relative bg-white rounded-md shadow p-[10px] w-[608px] h-[496px] flex items-center justify-center overflow-hidden">
        <img
          src={imagesFilledArray[currentIndex]}
          alt={`product ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded transition-transform duration-300"
        />

        <button
          onClick={prevSlide}
          className="absolute cursor-pointer top-1/2 left-3 -translate-y-1/2 flex items-center justify-center 
          w-10 h-10 rounded-md border border-[#70C05B] bg-white bg-opacity-70 
          hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-white transition"
        >
          <ArrowLeftSvg />
        </button>

        <button
          onClick={nextSlide}
          className="absolute cursor-pointer top-1/2 right-3 -translate-y-1/2 flex items-center justify-center 
          w-10 h-10 rounded-md border border-[#70C05B] bg-white bg-opacity-70 
          hover:bg-[#FF6633] hover:border-[#FF6633] hover:text-white transition"
        >
          <ArrowRightSvg />
        </button>
      </div>
    </div>
  );
}
