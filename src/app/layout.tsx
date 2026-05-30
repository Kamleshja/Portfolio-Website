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
  title: "Kamlesh Jangley | Full Stack .NET Developer & Systems Architect",
  description: "Full Stack .NET Developer with 4 years of experience building secure, scalable enterprise platforms and cross-platform mobile apps using ASP.NET Core, Angular, .NET MAUI, and SQL Server.",
  keywords: [
    "Full Stack .NET Developer",
    "ASP.NET Core Developer",
    "Angular Developer",
    "NET MAUI Developer",
    "Software Engineer Raipur",
    "Enterprise API Optimization",
    "Clean Architecture .NET",
    "C# Developer",
    "Entity Framework Core"
  ],
  authors: [{ name: "Kamlesh Jangley" }],
  creator: "Kamlesh Jangley",
  openGraph: {
    title: "Kamlesh Jangley | Full Stack .NET Developer & Systems Architect",
    description: "Full Stack .NET Developer with 4 years of experience building secure, scalable enterprise platforms using ASP.NET Core, Angular, .NET MAUI, and SQL Server.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamlesh Jangley | Full Stack .NET Developer & Systems Architect",
    description: "Full Stack .NET Developer with 4 years of experience building secure, scalable enterprise platforms using ASP.NET Core, Angular, .NET MAUI, and SQL Server.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
