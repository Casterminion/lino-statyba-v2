import type { ReactNode } from "react";
import { emailTheme } from "../email-theme";

export function EmailCardTable({ children }: { children: ReactNode }) {
  return (
    <table
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{
        width: "100%",
        backgroundColor: emailTheme.card,
        border: `1px solid ${emailTheme.border}`,
        borderCollapse: "collapse",
      }}
    >
      <tbody>{children}</tbody>
    </table>
  );
}
