import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://irfanshaikh.dev/"),
  title: "Irfan Shaikh - ML | Full Stack | Developer Portfolio",
  description:
    "Portfolio of Irfan Shaikh – ML enthusiast and Full Stack Developer. Passionate about crafting intelligent applications using modern web and AI technologies.",
  keywords: [
    "Irfan Shaikh",
    "ML Developer",
    "Full Stack Developer",
    "Developer Portfolio",
    "React",
    "Python",
    "Streamlit",
    "Machine Learning",
    "Flask",
    "IrfanShaikh911",
  ],
  openGraph: {
    title: "Irfan Shaikh - ML | Full Stack Developer",
    description:
      "Explore Irfan Shaikh’s portfolio – blending AI, ML, and full stack development into real-world software.",
    images: "/OpenGraph.jpg", // replace with your image in public/
  },
  alternates: {
    canonical: "https://irfanshaikh.dev/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Irfan Shaikh",
              jobTitle: "Software Developer",
              url: "https://irfanshaikh.dev",
              sameAs: [
                "https://www.linkedin.com/in/irfan-shaikh911/",
                "https://github.com/irfanshaikh911",
                "https://www.kaggle.com/irfan911",
              ],
            }),
          }}
        />
        {/* Optional: Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GTAG_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PUBLIC_GTAG_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
