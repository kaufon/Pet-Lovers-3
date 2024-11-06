"use client";
import {
  HandPlatter,
  House,
  NotebookTabs,
  PawPrint,
  ShoppingBasket,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  Navbar as NavBarRoot,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarRoot className="bg-sky-200 shadow w-full">
      <div className="flex items-center justify-between px-4 py-2 w-full">
        <Link
          href="/"
          className="font-black text-2xl sm:text-3xl flex flex-row items-center gap-2"
        >
          <House />
          Home
        </Link>

        <button
          className="block md:hidden text-2xl"
          onClick={toggleNavbar}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <NavbarContent
          className="hidden md:flex flex-row items-center justify-center text-black gap-4 sm:gap-8 px-4 py-2"
        >
          <NavbarItem
            as={Link}
            href="/pets"
            className="font-black text-2xl sm:text-3xl flex flex-row items-center gap-2"
          >
            <PawPrint />
            Pets
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/products"
            className="font-black text-2xl sm:text-3xl flex flex-row items-center gap-2"
          >
            <ShoppingBasket />
            Produtos
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/services"
            className="font-black text-2xl sm:text-3xl flex flex-row items-center gap-2"
          >
            <HandPlatter />
            Serviços
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/lists"
            className="font-black text-2xl sm:text-3xl flex flex-row items-center gap-2"
          >
            <NotebookTabs />
            Listagens
          </NavbarItem>
        </NavbarContent>
      </div>

      {isOpen && (
        <div className="md:hidden bg-sky-100 w-full flex flex-col items-center gap-4 p-4">
          <NavbarItem
            as={Link}
            href="/pets"
            className="font-black text-2xl flex flex-row items-center gap-2"
            onClick={toggleNavbar}
          >
            <PawPrint />
            Pets
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/products"
            className="font-black text-2xl flex flex-row items-center gap-2"
            onClick={toggleNavbar}
          >
            <ShoppingBasket />
            Produtos
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/services"
            className="font-black text-2xl flex flex-row items-center gap-2"
            onClick={toggleNavbar}
          >
            <HandPlatter />
            Serviços
          </NavbarItem>
          <NavbarItem
            as={Link}
            href="/lists"
            className="font-black text-2xl flex flex-row items-center gap-2"
            onClick={toggleNavbar}
          >
            <NotebookTabs />
            Listagens
          </NavbarItem>
        </div>
      )}
    </NavBarRoot>
  );
};

