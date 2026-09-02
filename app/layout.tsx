import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "lenis/dist/lenis.css";

// Layout components
import Header from "@/layouts/header";
import Footer from "@/layouts/footer"
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: {
    default: "MoreLearning | Enterprise Learning & Enablement Solutions",
    template: "%s | MoreLearning",
  },
  description:
    "MoreLearning helps global enterprises enable employees, customers, dealers and sales teams through interactive learning, visual communication, AI-powered experiences, simulations, presentations, videos, 3D and immersive technologies.",
  keywords: [
    "enterprise learning",
    "eLearning development",
    "workforce enablement",
    "corporate training",
    "instructional design",
    "immersive learning",
  ],
  openGraph: {
    title: "MoreLearning | Enterprise Learning & Enablement Solutions",
    description:
      "Interactive learning, visual communication, AI-powered experiences and immersive technology for global enterprises.",
    siteName: "MoreLearning",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoreLearning | Enterprise Learning & Enablement Solutions",
    description:
      "Interactive learning, visual communication, AI-powered experiences and immersive technology for global enterprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const aileron = localFont({
  src: [
    {
      path: "../assets/font/Aileron-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/font/Aileron-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/font/Aileron-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/font/Aileron-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/font/Aileron-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-aileron",
  // Perf: show fallback-font text immediately and swap to Aileron once it
  // loads, instead of leaving text invisible while the font downloads
  // (relevant on slower mobile connections).
  display: "swap",
});




export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
       <html
      lang="en"
      className={`h-full  antialiased`}
    >
      <body className={`min-h-full flex flex-col ${aileron.variable}`}>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
