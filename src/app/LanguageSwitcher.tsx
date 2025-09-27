"use client";

import { useRouter } from "next/navigation";
import { useTransition, useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selectedLocale, setSelectedLocale] = useState("en");

  // Read cookie only on client after hydration
  useEffect(() => {
    if (typeof document !== "undefined") {
      const match = document.cookie.match(/locale=(\w+)/);
      if (match) {
        setSelectedLocale(match[1]);
      }
    }
  }, []);

  const changeLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    setSelectedLocale(locale);

    // Refresh page with new locale
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={selectedLocale} // controlled state instead of defaultValue
      disabled={isPending}
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
    </select>
  );
}
