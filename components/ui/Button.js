// Reusable button used everywhere on the site (navbar, hero, footer, FAQs...).
// variant="primary"  -> solid blue button (main call-to-action)
// variant="outline"  -> white button with border (used on blue backgrounds)
export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  href,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm transition-colors duration-200 cursor-pointer";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-white text-blue-600 hover:bg-blue-50",
    ghost: "bg-transparent text-blue-600 hover:bg-blue-50",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  // If an href is passed, render a link-styled anchor (e.g. "Enquire Now"
  // scrolling to the contact section). Otherwise render a normal button.
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
