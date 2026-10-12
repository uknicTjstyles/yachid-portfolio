"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function BrandLogo({ className = "h-8" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src =
    mounted && resolvedTheme === "light"
      ? "/brand/logo-for-light-backgrounds.png"
      : "/brand/logo-for-dark-backgrounds.png";

  return (
    <Link href="#home" aria-label="Go to home">
      <Image
        src={src}
        alt="Yachid"
        width={1265}
        height={407}
        className={`${className} w-auto`}
        priority
      />
    </Link>
  );
}
