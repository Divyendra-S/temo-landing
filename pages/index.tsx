import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import HeroSection from "@/components/herosection";
import QuerySection from "../components/QuerySection";
import DataSection from "@/components/DataSection";
import FeatureSection from "@/components/FeatureSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between  relative pt-6 ${inter.className} bg-white`}
    >
      <Navbar/>
      <HeroSection/>
      <QuerySection/>
      <DataSection/>
      <FeatureSection/>
      
    </main>
  );
}
