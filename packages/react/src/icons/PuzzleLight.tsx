import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.953 13.315c0-1.32-1.071-2.391-2.393-2.391H1.537a.75.75 0 0 1-.746-.826c.22-2.149.743-3.781 1.912-4.907C3.748 4.186 5.2 3.69 7.073 3.455a3.892 3.892 0 0 1 7.74.031c1.797.251 3.196.763 4.203 1.769 1.007 1.007 1.518 2.405 1.769 4.202a3.891 3.891 0 0 1 .031 7.733c-.234 1.874-.73 3.33-1.74 4.375-1.127 1.168-2.763 1.69-4.916 1.91a.75.75 0 0 1-.826-.747v-1.036a2.392 2.392 0 0 0-4.786 0v1.058a.75.75 0 0 1-.817.747c-2.235-.201-3.93-.705-5.097-1.873-1.166-1.168-1.668-2.864-1.869-5.1a.75.75 0 0 1 .747-.817H2.56a2.39 2.39 0 0 0 2.393-2.392m1.5 0a3.89 3.89 0 0 1-3.893 3.892h-.208c.229 1.644.663 2.675 1.344 3.357.68.681 1.71 1.116 3.352 1.345v-.217a3.892 3.892 0 0 1 7.786 0v.183c1.542-.242 2.515-.68 3.164-1.352.761-.789 1.207-2.034 1.395-4.123l.026-.14a.75.75 0 0 1 .721-.543h.23a2.392 2.392 0 1 0 0-4.782h-.251a.75.75 0 0 1-.746-.674c-.204-1.995-.658-3.187-1.417-3.946-.76-.758-1.952-1.212-3.949-1.416a.75.75 0 0 1-.673-.746v-.261a2.392 2.392 0 0 0-4.786 0v.24a.75.75 0 0 1-.682.747c-2.088.188-3.334.633-4.123 1.393-.672.647-1.11 1.616-1.353 3.152h.17a3.89 3.89 0 0 1 3.893 3.891\"/>",
} as const;

export default function PuzzleLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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