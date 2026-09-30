import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { authRoutes } from "@/lib/routes";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata({
    locale: locale as Locale,
    title: t("signInTitle"),
    description: t("homeDescription"),
    path: "/sign-in",
    index: false,
  });
}

export default async function SignInPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("auth");

  return (
    <div className="flex min-h-[calc(100vh-16rem)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight text-ink">
          {t("signInTitle")}
        </h1>
        <p className="mt-2 text-sm text-muted">{t("signInBody")}</p>

        <form className="mt-6 space-y-4" onSubmit={undefined}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-ink"
            >
              {t("email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-ink focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-ink"
            >
              {t("password")}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-ink focus:border-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
          >
            {t("submitSignIn")}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted">{t("noAccount")} </span>
          <Link
            href={authRoutes.signUp}
            className="font-medium text-primary hover:text-primary-dark"
          >
            {t("signUpTitle")}
          </Link>
        </div>

        <p className="mt-4 text-center text-xs text-muted">{t("demoNote")}</p>
      </div>
    </div>
  );
}
