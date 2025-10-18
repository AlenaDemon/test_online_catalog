export function HighlightedText({ text, highlight }) {
  if (!highlight || !highlight.trim()) {
    return <span>{text}</span>;
  }

  try {
    const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedHighlight})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <mark
              key={index}
              className="bg-transparent text-[#70C05B] font-semibold px-0.5 rounded"
            >
              {part}
            </mark>
          ) : (
            part
          ),
        )}
      </span>
    );
  } catch (error) {
    return <span>{text}</span>;
  }
}
