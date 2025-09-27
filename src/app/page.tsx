import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>
        {t("title")}
        <br />
        {t("desc")}
      </h1>
      <Link href={"/about"}>
        <button>About</button>
      </Link>
      <LanguageSwitcher />
    </div>
  );
}
