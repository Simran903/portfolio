"use client";
import React from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-lg mx-auto z-50", className)}
    >
      <Menu>
        <MenuItem item="Home" href="#home" />
        <MenuItem item="Projects" href="#projects" />
        <MenuItem item="Work" href="#work" />
      </Menu>
    </div>
  );
}
