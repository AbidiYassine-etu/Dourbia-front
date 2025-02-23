'use client'
import Carousel from "./components/Carousel";
import About from "./components/About";
import Features from "./components/Feature";
import Packages from "./components/Packages";

export default function Home() {
  return (
    <main>
    
    <Carousel />
    <About/>
    <Features/>
    <Packages/>
    
  </main>
  );
}
