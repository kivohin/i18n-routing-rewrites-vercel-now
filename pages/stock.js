import Link from "next/link";
import { useRouter } from "next/router";

const LANGUAGE_OPTIONS = [
  { label: "English", value: "en" },
  { label: "Español", value: "es" },
  { label: "Français", value: "fr" },
];

const handleLocaleChange = (event, router) => {
  const { asPath, path, push } = router;

  push(path, asPath, { locale: event.target.value });
};

export default function Stock() {
  const router = useRouter();

  return (
    <>
      <h3>This is the /stock page</h3>

      <Link href="/" locale={router.locale}>
        <a>&larr; Navigate to Home page</a>
      </Link>

      <br />

      <Link href="/about" locale={router.locale}>
        <a>&larr; Navigate to About page</a>
      </Link>

      <br />

      <select
        onChange={(event) => handleLocaleChange(event, router)}
        value={router.locale}
      >
        {LANGUAGE_OPTIONS.map((languageOption) => (
          <option key={languageOption.value} value={languageOption.value}>
            {languageOption.label}
          </option>
        ))}
      </select>
    </>
  );
}
