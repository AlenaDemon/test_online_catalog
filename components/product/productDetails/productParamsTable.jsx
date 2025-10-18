export function ProductParamsTable({ product }) {
  return (
    <div className="mt-6 max-w-[424px] text-sm">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="bg-[#F3F2F1] h-[26px]">
            <td className="px-2 font-medium text-xs">Бренд</td>
            <td className="px-2 font-bold text-xs">{product.brand}</td>
          </tr>
          <tr className="h-[26px]">
            <td className="px-2 font-medium text-xs">Страна производителя</td>
            <td className="px-2 font-bold text-xs">Россия</td>
          </tr>
          <tr className="bg-[#F3F2F1] h-[26px]">
            <td className="px-2 font-medium text-xs">Упаковка</td>
            <td className="px-2 font-bold text-xs">{product.weight} кг</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
