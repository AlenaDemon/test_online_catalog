import { InfoSvg } from "../../../assets/infoSvg";
import { ShoppingSvg } from "../../../assets/shoppingSvg";
import { SmileSvg } from "../../../assets/smileSvg";
import { BettOffSvg } from "../../../assets/bettOffSvg";

export function ProductPriceBlock({ product }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-6">
        <div className="flex flex-col items-start">
          <p className="font-normal text-2xl text-[#606060] mb-2">
            {product.price} $
          </p>
          <p className="text-xs text-[#8F8F8F]">Обычная цена</p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-[#414141] font-bold text-4xl leading-[150%]">
            {product.discountPercentage} $
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-xs text-[#8F8F8F]">С картой Северяночки</p>
            <InfoSvg />
          </div>
        </div>
      </div>

      <button className="w-full text-2xl text-center relative bg-[#FF6633] text-white px-6 py-3 rounded">
        <span className="absolute left-4">
          <ShoppingSvg />
        </span>
        В корзину
      </button>

      <button className="text-[#70C05B] w-full text-xs text-center px-6 py-3 rounded flex items-center justify-center gap-2">
        <SmileSvg className="w-4 h-4" />
        Вы получаете 10 бонусов
      </button>

      <button className="w-full text-xs text-center px-6 py-3 rounded flex items-center justify-center gap-2">
        <BettOffSvg className="w-4 h-4" />
        Уведомить о снижении цены
      </button>
    </div>
  );
}
