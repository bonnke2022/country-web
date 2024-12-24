"use client";
import Moon from "@/app/assets/moon.svg";
import Outline from "@/app/assets/moon-outline.svg";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Image from "next/image";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // console.log(resolvedTheme);

  if (!mounted) {
    return (
      <Button variant="ghost">
        <Image
          src={Outline}
          alt="outline"
          width={20}
          height={20}
          priority={false}
          unoptimized
        />
        <p className="text-[1.3rem] font-bold">Dark Mode</p>
      </Button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <Button onClick={() => setTheme("dark")} variant="ghost">
        <Image
          src={Moon}
          alt="outline"
          width={20}
          height={20}
          priority={false}
          unoptimized
        />
        <p className="text-[1.3rem] font-bold">Dark Mode</p>
      </Button>
    );
  }
  if (resolvedTheme === "dark") {
    return (
      <Button onClick={() => setTheme("light")} variant="ghost">
        <Image
          src={Outline}
          alt="outline"
          width={20}
          height={20}
          priority={false}
        />
        <p className="text-[1.3rem] font-bold">Dark Mode</p>
      </Button>
    );
  }
};

export default ThemeToggle;
