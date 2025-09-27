import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <LanguageSwitcher />
      <h1>
        {t("title")}
        {t("desc")}
      </h1>
    </div>
  );
}
