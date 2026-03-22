import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-black/50">
    <Link to="/" className="text-white font-bold text-xl uppercase">PTE Wisdom</Link>
    <div className="flex gap-8 text-xs uppercase tracking-widest">
      <a href="#hero" className="text-white">Home</a>
      <a href="#skill-section" className="text-white">Skills</a>
      <a href="#contact-us" className="text-white">Contact</a>
    </div>
    <Link to="/login" className="bg-white text-black px-5 py-2 text-xs font-bold uppercase">Sign In</Link>
  </nav>
);