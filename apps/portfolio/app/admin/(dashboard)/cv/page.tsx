import { getCvUrl } from "@/lib/db/queries";
import { CvForm } from "./cv-form";

export default async function CvPage() {
  const cvUrl = await getCvUrl();

  return (
    <div>
      <h1 className="text-xl font-semibold text-neutral-900 mb-6">CV</h1>
      <CvForm cvUrl={cvUrl} />
    </div>
  );
}
