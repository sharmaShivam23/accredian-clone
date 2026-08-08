import * as Icons from "lucide-react";

// siteData.js stores icon names as plain strings (e.g. "Lightbulb") so the
// data file has zero dependency on React/lucide. This component looks the
// string up in lucide-react's icon set and renders the matching icon.
export default function Icon({ name, ...props }) {
  const LucideIcon = Icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}
