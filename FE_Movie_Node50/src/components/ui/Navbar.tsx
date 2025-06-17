"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import AuthMenu from "./AuthMenu";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-red-500 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Logo />
        <NavbarLinks />
        <div className="hidden md:flex items-center gap-4">
          <AuthMenu />
        </div>
        <button className="md:hidden text-red-500" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black text-red-500 px-4 py-4 space-y-4 shadow">
        </div>
      )}
    </header>
  );
};

export default Navbar;
