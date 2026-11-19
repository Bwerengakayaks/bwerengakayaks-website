import { Playfair_Display, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";
import { SITE, KEYWORDS } from "@/data/site";

const play = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-play", display: "swap" });
const body = Barlow({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-body", display: "swap" });
const cond = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-cond", display: "swap" });

const DESC = "Premium guided kayaking on Lake Victoria, 20 minutes from Entebbe. Small groups, birdwatching in Lutembe Bay, sunset paddles, kayak fishing and family adventures on calm, flat water.";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Kayaking Uganda | Guided Kayaking on Lake Victoria near Entebbe | BwerengaKayaks", template: "%s | BwerengaKayaks" },
  description: DESC,
  keywords: KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: SITE.name, locale: "en_GB", title: "BwerengaKayaks: Premium Guided Kayaking on Lake Victoria", description: DESC },
  robots: { index: true, follow: true },
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${play.variable} ${body.variable} ${cond.variable}`}>
      <body>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "TouristAttraction"],
          name: SITE.name, url: SITE.url, description: DESC,
          image: `${SITE.url}/logo.webp`, telephone: "+256780920626", email: SITE.email,
          address: { "@type": "PostalAddress", addressLocality: "Bwerenga", addressCountry: "UG" },
          hasMap: SITE.map, priceRange: "$150–$180",
        }} />
        <Header />
        {children}
        <Footer />
        <WhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
