import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { LANG_COOKIE, DEFAULT_LOCALE, type Locale } from "@/lib/locale";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LANG_COOKIE)?.value;
  const locale: Locale = cookieLocale === "fr" ? "fr" : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
