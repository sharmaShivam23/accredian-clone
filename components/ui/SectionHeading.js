// Reusable "Title with Highlighted Word(s) + Subtitle" heading block.
// title:          full heading text, e.g. "Our Domain Expertise"
// highlight:      the portion of `title` that should be colored blue
// subtitle:       smaller line under the heading (optional)
// subtitleHighlight: portion of subtitle to color blue (optional)
export default function SectionHeading({
  title,
  highlight,
  subtitle,
  subtitleHighlight,
  align = "center",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  const renderWithHighlight = (text, hl) => {
    if (!hl || !text.includes(hl)) return text;
    const parts = text.split(hl);
    return (
      <>
        {parts[0]}
        <span className="text-blue-600">{hl}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`max-w-2xl ${alignClass} mb-10`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
        {renderWithHighlight(title, highlight)}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 text-base sm:text-lg">
          {renderWithHighlight(subtitle, subtitleHighlight)}
        </p>
      )}
    </div>
  );
}
