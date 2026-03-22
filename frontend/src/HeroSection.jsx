import { ScrollingMosaic } from "./ScrollingMosaic";

export const HeroSection = () => (
  <section id="hero" className="h-screen grid grid-cols-2 items-center px-12">
    <div>
      <h1 className="hero-title text-white">Master your<br/>PTE exam</h1>
      <p className="text-zinc-500 mt-6 mb-10">AI-powered practice tests and instant results.</p>
      <button className="bg-white text-black px-10 py-4 font-bold uppercase">Start Now</button>
    </div>
    <div className="h-full"><ScrollingMosaic /></div>
  </section>
);