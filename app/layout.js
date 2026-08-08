import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
  description:
    "Accredian Enterprise partners with organizations to deliver tailored, outcome-driven corporate training programs co-crafted with premier institutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}
