import { Footer } from "./footer";
import { Header } from "./header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center">
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
