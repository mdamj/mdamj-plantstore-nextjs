import "./globals.css";

export const metadata = {
  title: "Plant Store",
  description: "Responsive Plant Store UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
