import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getCvUrl } from "@/lib/db/queries";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const cvUrl = await getCvUrl();
  return (
    <>
      <SiteHeader cvUrl={cvUrl} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
