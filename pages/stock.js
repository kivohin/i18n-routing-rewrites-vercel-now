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
        <a>&larr; Navigate to Home page (uses Rewrites)</a>
      </Link>

      <br />

      <Link href="/about" locale={router.locale}>
        <a>&larr; Navigate to About page (uses Rewrites)</a>
      </Link>

      <br />

      <Link href="/partners" locale={router.locale}>
        <a>&larr; Navigate to Partners page (uses Rewrites)</a>
      </Link>

      <br />

      <Link href="/training" locale={router.locale}>
        <a>&larr; Navigate to Training page (uses Rewrites)</a>
      </Link>

      <br />
      <br />

      <Link href="/stock" locale={router.locale}>
        <a>&larr; Navigate to Stock page (Next.js page)</a>
      </Link>

      <br />
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
