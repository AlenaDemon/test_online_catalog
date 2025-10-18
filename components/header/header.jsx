import logo from "../../assets/logo.svg";
import Image from "next/image";
import avatar from "../../assets/avatar.png";
import { MenuSvg } from "../../assets/menuSvg";
import { OrderSvg } from "../../assets/ordersSvg";
import { FavoritesSvg } from "../../assets/favoritesSvg";
import { BasketSvg } from "../../assets/basketSvg";
import { PointerSvg } from "../../assets/pointerSvg";
import { ArrowSwg } from "../../assets/arrowSvg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetProductByIdQuery } from "../../lib/services/productsApi";

export function Header() {
  const router = useRouter();
  const path = router.pathname;
  const { id } = router.query;
  const { data: product } = useGetProductByIdQuery(id, { skip: !id });

  return (
    <>
      <header className="w-full bg-white shadow-lg sticky top-0 z-40">
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-4 md:px-8 lg:px-[116px] py-3">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="logo"
              className="w-[100px] md:w-[120px] h-auto"
            />

            <button className="flex items-center gap-2 bg-[#70C05B] text-white rounded-sm px-4 py-2 text-sm md:text-base font-medium hover:bg-[#FF6633] transition">
              <MenuSvg />
              <span className="hidden sm:inline">Каталог</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="flex flex-col items-center hover:text-[#FF6633] cursor-pointer transition">
              <FavoritesSvg />
              <span className="text-xs mt-2">Избранное</span>
            </button>
            <button className="flex flex-col items-center  hover:text-[#FF6633] cursor-pointer transition">
              <OrderSvg />
              <span className="text-xs mt-1">Заказы</span>
            </button>
            <button className="flex flex-col items-center hover:text-[#FF6633] cursor-pointer transition">
              <BasketSvg />
              <span className="text-xs">Корзина</span>
            </button>

            <button className="flex items-center gap-2 cursor-pointer">
              <Image
                src={avatar}
                alt="avatar"
                className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full"
              />
              <div className="flex items-center">
                <div className=" hidden lg:block text-sm md:text-base font-medium">
                  Алексей
                </div>

                <PointerSvg className="hidden lg:block" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div className="w-full px-4 md:px-8 lg:px-[116px] py-4">
        <nav className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium">
          <Link href="/" className="hover:text-gray-900">
            Главная
          </Link>
          <ArrowSwg />

          {path === "/" ? (
            <Link href="/" className="hover:text-gray-900">
              <span className="truncate max-w-[160px] text-[#8F8F8F]">
                Поиск
              </span>
            </Link>
          ) : (
            <Link href="/" className="hover:text-gray-900">
              Поиск
            </Link>
          )}

          {path === "/products/[id]" && product && (
            <>
              <ArrowSwg />
              <span className="truncate max-w-[160px] text-[#8F8F8F]">
                {product.title}
              </span>
            </>
          )}
        </nav>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg flex justify-around py-2 z-50">
        <button className="flex-col items-center text-[10px] text-[#414141] hover:text-[#FF6633] transition">
          <MenuSvg />
          <span>Каталог</span>
        </button>

        <button className="flex flex-col items-center text-[10px] text-[#414141] hover:text-[#FF6633] transition">
          <FavoritesSvg />
          <span className="mt-[7.8px]">Избранное</span>
        </button>

        <button className="flex flex-col items-center text-[10px] text-[#414141] hover:text-[#FF6633] transition">
          <OrderSvg />
          <span className="mt-[4.3px]">Заказы</span>
        </button>

        <button className="flex flex-col items-center text-[10px] text-[#414141] hover:text-[#FF6633] transition">
          <BasketSvg />
          <span>Корзина</span>
        </button>

        <button className="flex flex-col items-center text-[10px] text-[#414141] hover:text-[#FF6633] transition">
          <Image src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
        </button>
      </div>
    </>
  );
}
