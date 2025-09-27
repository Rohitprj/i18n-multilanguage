import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{t("title")}</h1>
      <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
        {t("description")}
      </p>

      <div style={{ marginTop: "2rem" }}>
        <Link href={"/"}>
          <button style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            {t("backHome")}
          </button>
        </Link>
      </div>
      <LanguageSwitcher />
    </div>
  );
}
