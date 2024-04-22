"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const items = [
    { icon: "/icons/Home.svg", label: "Home", route: "/" },
    { icon: "/icons/upcoming.svg", label: "Upcoming", route: "/upcoming" },
    { icon: "/icons/previous.svg", label: "Previous", route: "/previous" },
    { icon: "/icons/Video.svg", label: "Recordings", route: "/recordings" },
    {
      icon: "/icons/add-personal.svg",
      label: "Personal Room",
      route: "/personal-room",
    },
  ];

  const pathName = usePathname();
  return (
    <section className="sticky left-0 top-0 flex w-fit flex-col h-screen justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {items.map((link) => {
          const isActive = pathName === link.route;
          return (
            <Link
              key={link.label}
              href={link.route}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-1": isActive }
              )}
            >
              <Image src={link.icon} alt={link.label} width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
