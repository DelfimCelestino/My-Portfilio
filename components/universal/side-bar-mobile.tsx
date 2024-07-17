"use client";

import { Menu } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { routes } from "@/utils/utils";
import Link from "next/link";
import { UniversalContext } from "@/context/UniversalContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ListingMusic from "../listing-music";
import { motion } from "framer-motion";
import { useState } from "react";

const SideBarMobile = () => {
  const { CurrentRoute } = UniversalContext();

  const [hamburger, setHamburger] = useState(false);

  return (
    <aside
      className={cn(
        "fixed top-0 z-40 flex md:hidden flex-col w-full md:w-72 border-r border-b md:border-b-0 ",
        hamburger && "h-[100vh]  "
      )}
    >
      <header className="flex md:hidden z-40 bg-background justify-between  py-3 px-8 border-b">
        <div
          className={cn(
            "w-full opacity-0",
            CurrentRoute !== "/" && "opacity-1"
          )}
        >
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

        <div className="flex gap-3 items-center">
          <ModeToggle />
          <Button
            onClick={() => setHamburger(!hamburger)}
            variant={"outline"}
            size={"icon"}
          >
            <Menu size={25} />
          </Button>
        </div>
      </header>
      <motion.ul
        animate={{ opacity: hamburger ? 1 : 0, y: hamburger ? 0 : -1000 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "hidden bg-background md:transparent border-b p-3 flex-1 overflow-x-auto  md:static",
          hamburger && "block"
        )}
      >
        {routes.map((item, index) => (
          <li className="w-full" key={index}>
            {item.title && (
              <p className="px-3 pt-5 pb-2 text-xs font-semibold text-muted-foreground">
                {item.title}
              </p>
            )}
            {item.links.map((link) => (
              <Button
                onClick={() => setHamburger(!hamburger)}
                key={link.name}
                disabled={link.disabled}
                variant={"link"}
                className={cn(
                  "my-1 w-full text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
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
        {/* side bar footer mobile*/}

        <ListingMusic />
      </motion.ul>
    </aside>
  );
};
export default SideBarMobile;
