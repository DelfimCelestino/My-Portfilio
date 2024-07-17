"use client";

import { Music } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { routes } from "@/utils/utils";
import Link from "next/link";
import { UniversalContext } from "@/context/UniversalContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ListingMusic from "../listing-music";

const SideBar = () => {
  const { CurrentRoute } = UniversalContext();
  return (
    <aside className="fixed top-0 hidden md:flex flex-col w-full md:w-72 border-r h-[100vh] z-40 border-b md:border-b-0">
      {/* side bar header */}
      {CurrentRoute !== "/" && (
        <div className="hidden md:flex w-full">
          <Link
            href="/"
            className="flex-1 md:border-b md:px-3 overflow-hidden transition-all flex items-center duration-500 md:h-[4.875rem]"
          >
            <div className="flex gap-2 items-center">
              <Image
                className="rounded-md"
                height={36}
                width={36}
                src="/profile.jpeg"
                alt="logo"
              />
              <div className="flex flex-col justify-between h-full">
                <p className="text-sm font-medium">Delfim Celestino</p>
                <p className="text-xs text-muted-foreground">
                  Desenvolvedor fullstack
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}
      <ul className="border-b p-3 flex-1 overflow-x-auto  md:static ">
        {routes.map((item, index) => (
          <li className="w-full" key={index}>
            {item.title && (
              <p className="px-3 pt-5 pb-2 text-xs font-semibold text-muted-foreground">
                {item.title}
              </p>
            )}
            {item.links.map((link) => (
              <Button
                key={link.name}
                disabled={link.disabled}
                variant={"link"}
                className={cn(
                  " w-full text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                  CurrentRoute === link.path &&
                    "bg-accent text-accent-foreground"
                )}
              >
                <Link
                  target={link.target}
                  className="flex items-center gap-3 px-3 py-2 w-full"
                  href={link.path}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </Button>
            ))}
          </li>
        ))}
      </ul>

      {/* side bar footer desktop*/}
      <div className="hidden md:block py-2">
        <ListingMusic />
        {/* <span className="text-xs text-muted-foreground px-4">
          Inspirado por ErickNathan
        </span> */}
      </div>
    </aside>
  );
};
export default SideBar;
