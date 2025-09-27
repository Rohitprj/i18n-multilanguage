"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = async (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={document.cookie.includes("locale=hi") ? "hi" : "en"}
      disabled={isPending}
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
    </select>
  );
}
