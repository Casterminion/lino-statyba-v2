import { PrivacyPolicyPage } from "@/components/legal/PrivacyPolicyPage";
import { COMPANY, PRIVACY_POLICY } from "@/lib/content/privacy-policy";

export const metadata = {
  title: `${PRIVACY_POLICY.title} | ${COMPANY.name}`,
  description: PRIVACY_POLICY.description,
};

export default function PrivatumoPolitikaPage() {
  return <PrivacyPolicyPage />;
}
