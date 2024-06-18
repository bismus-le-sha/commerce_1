
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Metrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    ym(97609503, "hit", url);
  }, [pathname, searchParams]);

  return null;
}