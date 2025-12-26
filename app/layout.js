import "./globals.css";

export const metadata = {
  title: "task/HarshalPatel",
  description: "Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-auto">
        {children}
      </body>
    </html>
  );
}
