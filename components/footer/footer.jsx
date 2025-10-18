import logo from "../../assets/logo.svg";
import Image from "next/image";
import { Phone } from "../../assets/phone";
import { Inst } from "../../assets/inst";
import { Vk } from "../../assets/vk";
import { Facebook } from "../../assets/facebook";
import { Ok } from "../../assets/ok";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 w-full bg-[#F9F4E2] py-6">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center gap-6">
        <div className="flex flex-wrap items-center gap-8 md:gap-10">
          <Image
            src={logo}
            alt="logo"
            className="w-[120px] md:w-[140px] h-auto"
          />

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#414141]">
            <Link href="#" className="hover:text-[#FF6633] transition">
              О компании
            </Link>
            <Link href="#" className="hover:text-[#FF6633] transition">
              Контакты
            </Link>
            <Link href="#" className="hover:text-[#FF6633] transition">
              Вакансии
            </Link>
            <Link href="#" className="hover:text-[#FF6633] transition">
              Статьи
            </Link>
            <Link
              href="#"
              className="hover:text-[#FF6633] transition max-w-[200px] sm:max-w-none"
            >
              Политика обработки персональных данных
            </Link>
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <div className="flex items-center gap-4">
            <Inst />
            <Vk />
            <Facebook />
            <Ok />
          </div>

          <div className="flex items-center gap-2">
            <Phone />
            <span className="text-[#414141] text-base font-medium whitespace-nowrap">
              8 800 777 33 33
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
