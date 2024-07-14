"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaArrowRight, FaGlobe } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("Header");

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center pb-4 border-b">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/eneslogo.webp" alt="Logo" height={40} width={120} />
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-black hover:text-[#010ED0]">
            {t("Home")}
          </a>
          <a href="#" className="text-black hover:text-[#010ED0]">
            {t("About")}
          </a>
          <a href="#" className="text-black hover:text-[#010ED0]">
            {t("Services")}
          </a>
          <a href="#" className="text-black hover:text-[#010ED0]">
            {t("Contact")}
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex-shrink-0 flex items-center space-x-4">
          {/* Client Support */}
          <div className="flex flex-col space-x-2">
            <a
              href="#"
              className="flex items-center justify-center hover:text-[#010ED0]"
            >
              {t("ClientSupport")} <FaArrowRight />
            </a>
            <a href="tel:+905465678969" className="hover:text-[#010ED0]">
              +90 546 567 8969
            </a>
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              <FaGlobe />
              <span>{t("Language")}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                <a
                  href="tr"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  TR
                </a>
                <a
                  href="en"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  EN
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
