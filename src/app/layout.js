import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from 'next/script'; // Importamos el componente Script

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rig Quiropráctico - Consulta Quiropráctica Profesional",
  description: "Recupera tu bienestar con atención quiropráctica de primer nivel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Script de Rigbot integrado de forma optimizada con Next.js */}
        <Script 
          src="https://rigbot-product.vercel.app/api/widget?clientId=N5l2rO5YZ5flnUEqfn4Mzzzc7Ox2"
          strategy="afterInteractive" 
        />
        
      </body>
    </html>
  );
}