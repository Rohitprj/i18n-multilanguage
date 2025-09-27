import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>
        {t("title")}
        <br />
        {t("desc")}
      </h1>
      <LanguageSwitcher />
    </div>
  );
}
