import Image from "next/image";
import PageShell from "@/components/PageShell";
import Appear from "@/components/Appear";
import { getCompanyIntro, getCompanyMission, teamMembers } from "@/lib/content";

export const metadata = {
  title: "Company | Lino Statyba",
  description: getCompanyIntro(),
};

export default function CompanyPage() {
  return (
    <PageShell title="Company" subtitle={getCompanyIntro()}>
      <Appear>
        <p className="leading-relaxed text-black/75">{getCompanyMission()}</p>
      </Appear>

      <div className="grid gap-12 pt-8 wide:grid-cols-3 desktop:grid-cols-3">
        {teamMembers.map((member, i) => (
          <Appear key={member.name} delay={i * 0.1}>
            <div>
              <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-black/10">
                {member.image && (
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                )}
              </div>
              <h3 className="font-serif text-xl">{member.name}</h3>
              <p className="mt-1 text-xs tracking-widest text-black/50">{member.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-black/70">{member.bio}</p>
            </div>
          </Appear>
        ))}
      </div>
    </PageShell>
  );
}
