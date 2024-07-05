import { Inter, Karla } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Contact Form</title>
        <meta
          name="description"
          content="Contact Form challenge frontendmentor"
          property="og:description"
        />
      </head>
      <body className={`${karla.className}`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
