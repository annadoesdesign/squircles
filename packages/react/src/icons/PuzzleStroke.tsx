import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.703 13.565a2.14 2.14 0 0 0-2.143-2.141H1.537a1 1 0 0 1-.995-1.102c.222-2.168.754-3.873 1.987-5.06 1.063-1.024 2.514-1.534 4.321-1.78a4.144 4.144 0 0 1 8.186.034c1.735.264 3.132.788 4.157 1.812s1.548 2.42 1.812 4.154a4.142 4.142 0 0 1 .034 8.18c-.247 1.81-.756 3.262-1.783 4.326-1.19 1.233-2.898 1.764-5.07 1.985a1 1 0 0 1-1.102-.994v-1.037a2.142 2.142 0 0 0-4.286 0V23a1 1 0 0 1-1.09.996c-2.252-.203-4.02-.714-5.25-1.945S.718 19.05.516 16.796a1 1 0 0 1 .996-1.089H2.56c1.184 0 2.143-.96 2.143-2.142m2 0a4.14 4.14 0 0 1-4.062 4.14c.234 1.45.642 2.342 1.232 2.932.588.59 1.479.998 2.926 1.232a4.142 4.142 0 0 1 8.282-.04c1.345-.245 2.18-.652 2.737-1.23.701-.726 1.14-1.9 1.326-3.971l.014-.096a1 1 0 0 1 .982-.815h.23a2.142 2.142 0 1 0 0-4.282h-.251a1 1 0 0 1-.995-.899c-.202-1.975-.647-3.096-1.345-3.794-.698-.697-1.82-1.142-3.797-1.344a1 1 0 0 1-.898-.995v-.261a2.142 2.142 0 0 0-4.286 0v.24c0 .517-.395.95-.91.996-2.07.186-3.244.624-3.971 1.324-.578.556-.987 1.386-1.233 2.725a4.14 4.14 0 0 1 4.019 4.138\"/>",
  light: "",
} as const;

export default function PuzzleStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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