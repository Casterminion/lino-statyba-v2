import { Img, Section } from "@react-email/components";
import { emailTheme } from "../email-theme";

type IconName = "user" | "phone" | "mail" | "calendar" | "globe" | "monitor";

const icons: Record<IconName, string> = {
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${emailTheme.iconStroke}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${emailTheme.iconStroke}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${emailTheme.iconStroke}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${emailTheme.textMuted}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${emailTheme.textMuted}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  monitor: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${emailTheme.textMuted}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
};

function iconSrc(name: IconName): string {
  return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
}

type EmailIconProps = {
  name: IconName;
  size?: "md" | "sm";
};

export function EmailIcon({ name, size = "md" }: EmailIconProps) {
  const dimension = size === "md" ? emailTheme.iconSize : 14;
  const imgSize = size === "md" ? 18 : 14;

  if (size === "sm") {
    return (
      <Img
        src={iconSrc(name)}
        alt=""
        width={imgSize}
        height={imgSize}
        style={{ display: "inline-block", verticalAlign: "middle" }}
      />
    );
  }

  return (
    <Section
      style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        backgroundColor: emailTheme.iconBg,
        borderRadius: "10px",
        textAlign: "center",
        lineHeight: `${dimension}px`,
        margin: 0,
      }}
    >
      <Img
        src={iconSrc(name)}
        alt=""
        width={imgSize}
        height={imgSize}
        style={{
          display: "inline-block",
          verticalAlign: "middle",
          margin: "9px auto",
        }}
      />
    </Section>
  );
}
