import { appTheme } from "@/utils/theme";

export default function SvgGradient() {
  return (
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={0} y1={0} x2={1} y2={1}>
        <stop offset={0} stopColor={appTheme.quaternary} />
        <stop offset={1} stopColor={appTheme.primary} />
      </linearGradient>
    </svg>
  );
}
