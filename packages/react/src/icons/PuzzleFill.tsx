import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M10.94 0a4.14 4.14 0 0 1 4.096 3.516c1.735.264 3.132.788 4.157 1.812s1.548 2.42 1.812 4.154a4.142 4.142 0 0 1 .034 8.18c-.247 1.81-.756 3.262-1.783 4.326-1.19 1.233-2.898 1.764-5.07 1.985a1 1 0 0 1-1.102-.994v-1.037a2.142 2.142 0 0 0-4.286 0V23a1 1 0 0 1-1.09.996c-2.252-.203-4.02-.714-5.25-1.945S.718 19.05.516 16.796a1 1 0 0 1 .996-1.089H2.56a2.142 2.142 0 1 0 0-4.283H1.537a1 1 0 0 1-.995-1.102c.222-2.168.754-3.873 1.987-5.06 1.063-1.024 2.514-1.534 4.321-1.78A4.144 4.144 0 0 1 10.94 0\"/>",
  regular: "",
  light: "",
} as const;

export default function PuzzleFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
  const ctx = React.useContext(IconContext);
  const { size = ctx.size, color = ctx.color, weight = ctx.weight, mirrored = ctx.mirrored, ...rest } = props;
  const g = paths[weight] ?? paths.regular ?? paths.fill ?? paths.light ?? "";
  const transform = mirrored ? "scale(-1,1) translate(-256,0)" : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      {...rest}
    >
      <g transform={transform} dangerouslySetInnerHTML={{ __html: g }} />
    </svg>
  );
}