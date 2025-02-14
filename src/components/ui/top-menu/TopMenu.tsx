"use client";
import Link from "next/link";
import { IoSearchOutline, } from "react-icons/io5";
import { useUIStore } from "@/store";
import Image from 'next/image';


export const TopMenu = ({ session }: any) => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 pt-3 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <Image width="150" height="60" src="/imgs/logo.png" alt='logo' />
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/"
        >
          Home
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/create"
        >
          Create
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/saved"
        >
          Saved
        </Link>

      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>


        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/profile"
        >
          {session?.user.name}
        </Link>
        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
