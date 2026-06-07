import { PrivacyPolicyPage } from "@/components/legal/PrivacyPolicyPage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getPageSeo } from "@/lib/seo/pages";

export const metadata = buildPageMetadata(getPageSeo("/privatumo-politika"));

export default function PrivatumoPolitikaPage() {
  return <PrivacyPolicyPage />;
}
