import { Header } from "../components/header/header";
import { SearchBar } from "../components/search/searchBar";
import { ProductGrid } from "../components/product/productGrid";
import {
  useGetAllProductsQuery,
  useSearchProductsQuery,
} from "../lib/services/productsApi";
import { toast } from "react-toastify";
import { useEffect, useState, useMemo, useCallback } from "react";
import { Loader } from "../components/loader/loader";
import { Footer } from "../components/footer/footer";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleRows, setVisibleRows] = useState(4);

  const {
    data: allProducts,
    error,
    isLoading: isAllLoading,
  } = useGetAllProductsQuery();
  const { data: searchedProducts, isLoading: isSearchLoading } =
    useSearchProductsQuery(searchTerm, {
      skip: !searchTerm || searchTerm.length < 2,
    });

  useEffect(() => {
    if (error) toast.error("Ошибка соединения");
  }, [error]);

  useEffect(() => {
    setVisibleRows(4);
  }, [searchTerm]);

  const suggestions = useMemo(() => {
    return (
      allProducts?.products?.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ) || []
    );
  }, [allProducts?.products, searchTerm]);

  const handleSelectSuggestion = useCallback((title) => {
    setSearchTerm(title);
  }, []);

  const handleSearchTermChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleRows((prev) => prev + 2);
  }, []);

  const allProductsData = useMemo(() => {
    if (searchTerm) return searchedProducts?.products || [];
    return allProducts?.products || [];
  }, [searchTerm, searchedProducts?.products, allProducts?.products]);

  const visibleProducts = useMemo(() => {
    const productsPerRow = 4;
    return allProductsData.slice(0, visibleRows * productsPerRow);
  }, [allProductsData, visibleRows]);

  const isLoading = isAllLoading || (isSearchLoading && searchTerm);
  const hasMoreProducts = visibleProducts.length < allProductsData.length;

  if (isAllLoading) return <Loader />;

  return (
    <div className="bg-white min-h-screen flex flex-col text-[#414141]">
      <Header />
      <main className="flex-grow px-4 sm:px-6 md:px-[116px]">
        <div>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={handleSearchTermChange}
            suggestions={suggestions}
            onSelectSuggestion={handleSelectSuggestion}
          />

          {isLoading ? <Loader /> : <ProductGrid products={visibleProducts} />}

          {hasMoreProducts && !isLoading && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                className="w-43 h-10 pt-2 pr-6 pb-2 pl-6 opacity-100 rounded border border-[#BFBFBF] hover:border-[#FF6633] transition flex items-center justify-center gap-2"
              >
                <span>Загрузить еще</span>
              </button>
            </div>
          )}

          {!hasMoreProducts && allProductsData.length > 0 && (
            <div className="text-center mt-8 text-gray-500 font-montserrat">
              Показаны все товары ({allProductsData.length})
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
