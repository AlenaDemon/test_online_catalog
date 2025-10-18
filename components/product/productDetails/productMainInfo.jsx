import { ImageGallery } from "../../gallery/ImageGallery";
import { ProductPriceBlock } from "./poductPriceBlock";
import { ProductParamsTable } from "./productParamsTable";

export function ProductMainInfo({ product }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_424px] gap-8 mb-16">
      <div className="min-w-0">
        <ImageGallery images={product.images} />
      </div>

      <div className="max-w-[424px] w-full h-auto">
        <ProductPriceBlock product={product} />
        <ProductParamsTable product={product} />
      </div>
    </div>
  );
}
