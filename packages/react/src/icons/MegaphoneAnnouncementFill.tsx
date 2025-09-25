import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M17.843.506a4.66 4.66 0 0 1 5.74 3.468c.941 4.138.941 8.436 0 12.574l-.06.238a4.66 4.66 0 0 1-5.441 3.286l-.24-.056-.312-.083c-1.466-.391-2.9-.893-4.29-1.498l-.594-.266-2.133-.985v.077c0 5.833 1.25 7-2.5 7s-4.5-1.167-4.5-7q0-.727.02-1.36c.94.238 1.907.36 2.879.36h.028l-.478-.01a12 12 0 0 1-2.822-.458l-.457-.141A2.13 2.13 0 0 1 1.27 14.05l-.1-.5a16.8 16.8 0 0 1-.075-6.171l.076-.408.1-.5a2.13 2.13 0 0 1 1.412-1.6 11.9 11.9 0 0 1 3.279-.6l.478-.01h2.04l.062-.014 4.104-1.894A30.3 30.3 0 0 1 17.53.589zm3.79 3.911a2.66 2.66 0 0 0-3.276-1.978l-.311.083a28.3 28.3 0 0 0-4.562 1.647l-3.01 1.389a24.5 24.5 0 0 0 0 9.405l3.01 1.39c1.47.678 2.997 1.23 4.562 1.647l.311.083a2.66 2.66 0 0 0 3.277-1.978 26.4 26.4 0 0 0 0-11.688\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function MegaphoneAnnouncementFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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