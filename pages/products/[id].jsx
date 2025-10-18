import { useRouter } from "next/router";
import { useGetProductByIdQuery } from "../../lib/services/productsApi";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ProductDetails } from "../../components/product/productDetails/index";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, error } = useGetProductByIdQuery(id, {
    skip: !id,
  });

  if (error)
    return (
      <p className="text-center text-red-500 mt-10">Ошибка загрузки данных</p>
    );

  return (
    <div className="bg-white min-h-screen flex flex-col text-[#414141]">
      <Header />
      <main className="flex-grow px-[116px]">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  );
}
