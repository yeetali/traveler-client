"use client"

import { logout } from "@/lib/actions";
import clsx from "clsx";
import { HomeIcon, LocateIcon, LogOut, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useActionState } from "react";

const NavItems = () => {
  const pathName = usePathname();
  return [
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon />,
      active: pathName === "/",
    },
    {
      name: "Profile",
      href: "/profile",
      icon: <UserIcon />,
      active: pathName === "/profile",
    },
    {
      name: "Destinations",
      href: "/destinations",
      icon: <LocateIcon />,
      active: pathName === "/destinations",
    },
  ]
}

export const SideBar = () => {
  const navItems = NavItems();
  const [, action] = useActionState(logout, null);
  return (
    <div className='md:flex hidden flex-col bg-blue-100 border-r-2 border-r-blue-700 h-screen w-xs justify-between sticky left-0 top-0 bottom-0'>
      <div className="flex flex-col">
        {navItems.map(item => {
          return (
          <Link 
          key={item.name} 
          href={item.href} 
          className={`flex gap-4 px-8 py-6 hover:bg-blue-300 h-full w-full ${clsx(item.active ? "text-blue-400" : "")}`}
          >
            {item.icon} {item.name}
          </Link>
          );
        })}
      </div>
      <div>
        <form action={action}>
        <button type="submit" className="flex gap-4 px-8 py-6 hover:cursor hover:bg-blue-300 h-full w-full">
          <LogOut /> Log Out
        </button>
        </form>
      </div>
    </div>
  )
}

export const BottomBar = () => {
  const navItems = NavItems();
  const [, action] = useActionState(logout, null);
  return (
    <div className='md:hidden flex flex-row bg-blue-100 border-r-2 border-r-blue-700 w-screen justify-between fixed left-0 right-0 bottom-0'>
        {navItems.map(item => {
          return (
          <Link 
          key={item.name} 
          href={item.href} 
          className={`flex justify-center items-center p-4 hover:bg-blue-300 h-full w-full ${clsx(
            item.active ? "text-blue-400" : ""
          )}`}
          >
            {item.icon}
          </Link>
          );
        })}
        <form action={action} className="flex justify-center items-center p-4 hover:bg-blue-300 h-full w-full">
        <button type="submit">
          <LogOut />
        </button>
        </form>
    </div>
  )
}