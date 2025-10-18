import { ProductCard } from "./productCard";

export function ProductGrid({ products }) {
  if (!products?.length) {
    return <p className="text-gray-500">Ничего не найдено</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
