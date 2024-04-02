import { Footer } from "./footer";
import { Header } from "./header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
