import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boilerkit.megh.me"),
  title: "BoilerKit – Instantly Insert Boilerplate Code for 30+ Languages",
  description:
    "Boost your productivity with BoilerKit – a VS Code extension that inserts ready-to-use boilerplate code in 30+ languages using simple triggers like `cppboiler`, `pyboiler`, `jsboiler`, and more.",
  keywords:
    "boilerplate code, code snippets, VS Code extension, developer tools, productivity, C++ boilerplate, JavaScript snippet, Tailwind snippets, React boilerplate, web dev tools, frontend snippets, backend snippets, coding faster, vscode snippets",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "BoilerKit – Instantly Insert Boilerplate Code for 30+ Languages",
    description:
      "Write less, build faster. BoilerKit helps you insert boilerplate code instantly in your favorite language. One trigger, one enter key – done.",
    url: "https://boilerkit.megh.me",
    siteName: "BoilerKit",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "BoilerKit – Instantly Insert Boilerplate Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoilerKit – Instantly Insert Boilerplate Code for 30+ Languages",
    description:
      "The ultimate VS Code extension to instantly insert boilerplate code. Supports 30+ languages and frameworks. Zero config. Max speed.",
    images: ["/banner.png"],
    creator: "@meghtrix",
  },
  alternates: {
    canonical: "https://boilerkit.megh.me",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
