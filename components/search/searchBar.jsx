import { useState, useEffect, useRef } from "react";
import { SearchSvg } from "../../assets/searchSvg";
import { HighlightedText } from "./highlightedText";

export function SearchBar({
  searchTerm,
  setSearchTerm,
  suggestions,
  onSelectSuggestion,
}) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localSearchTerm !== searchTerm) {
        setSearchTerm(localSearchTerm);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [localSearchTerm, searchTerm, setSearchTerm]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    setShowSuggestions(!!value);
  };

  const handleSelectSuggestion = (title) => {
    setLocalSearchTerm(title);
    onSelectSuggestion(title);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <>
      <h1 className="font-montserrat font-bold text-2xl leading-[150%] text-gray-800 mb-6">
        Поиск
      </h1>
      <div className="relative w-full mb-10">
        <input
          ref={inputRef}
          type="text"
          placeholder="Найти товар"
          value={localSearchTerm}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(!!localSearchTerm)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          className="w-full p-2 pr-10 border border-[#70C05B] rounded-md focus:outline-none focus:border-[#70C05B] focus:ring-0"
        />

        <button
          type="button"
          onClick={() => setShowSuggestions(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#70C05B] hover:text-green-700 transition"
        >
          <SearchSvg />
        </button>

        {showSuggestions && suggestions?.length > 0 && (
          <ul className="absolute left-0 w-full bg-white border border-[#70C05B] rounded-md mt-1 max-h-56 overflow-y-auto shadow-lg z-10">
            {suggestions.slice(0, 10).map((s) => (
              <li
                key={s.id}
                onMouseDown={() => handleSelectSuggestion(s.title)}
                className="px-3 py-2 hover:bg-[#F3F2F1] cursor-pointer text-gray-700 text-sm"
              >
                <HighlightedText text={s.title} highlight={localSearchTerm} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
