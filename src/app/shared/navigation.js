"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBars,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./logo";
//import { useAuth } from "../auth/auth-context";

export default function Navigation() {
  const [openMenu, setMenuOpen] = useState(false);
  const [openDropdown, setDropdownOpen] = useState("");

  const toggleDropdown = (dropdown) => {
    setDropdownOpen(openDropdown !== "" ? "" : dropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!openMenu);
    toggleDropdown("");
  };

  const closeMenuAndNavigate = () => {
    setMenuOpen(false);
    setDropdownOpen("");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    openMenu || openDropdown !== ""
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [openMenu, openDropdown]);

  return (
    <header className="md:mx-auto w-full shadow-md bg-black text-white flex justify-center items-center fixed top-0 z-20 px-4">
      <nav
        className={`flex items-center w-full p-4 py-5 justify-between sm:justify-start gap-10 uppercase`}
      >
        <div className={`flex items-center z-30 pr-4 sm:border-r-4 border-r-whit`}>
          <Logo/>
        </div>
        <button
          aria-label="navigation menu"
          onClick={toggleMenu}
          className="md:hidden z-20"
        >
          <FontAwesomeIcon
            icon={openMenu ? faTimes : faBars}
            className={`text-white fa-lg`}
          />
        </button>
        <div
          className={`${
            openMenu
              ? "fixed top-0 right-0 h-screen w-full bg-black"
              : "hidden bg-transparent"
          } md:relative md:flex md:w-auto full text-[calc(12px+10vh)]`}
        >
          <ul
            className={`${
              openMenu ? "p-4 pt-[10vh]" : null
            } text-slate-100 flex ml-0 list-none flex-col space-y-14 text-lg font-normal justify-start overflow-scroll md:overflow-visible md:justify-center items-center h-full md:flex-row md:space-x-6 md:space-y-0`}
          >
            <li
              onClick={() => closeMenuAndNavigate("/")}
              className="hover:text-green-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => closeMenuAndNavigate("/find")}
              className="hover:text-green-500"
            >
              <Link href="/find">Find</Link>
            </li>
            <li
              onClick={() => closeMenuAndNavigate("/shop")}
              className="hover:text-green-500"
            >
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
