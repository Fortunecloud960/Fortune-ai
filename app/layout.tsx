import "./globals.css";

export const metadata = {
  title: "Fortune AI",
  description: "Your intelligent AI assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
