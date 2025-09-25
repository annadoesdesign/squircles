import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.067.104a1 1 0 0 1 1.026.082l1.79 1.279a47.1 47.1 0 0 1 9.41 8.91 1 1 0 0 1-1.562 1.25q-.15-.188-.303-.373c.058.824.084 1.737.084 2.748 0 6.785-1.105 9.15-6.013 9.795-.618.08-1.13-.451-1.079-1.073.053-.638.092-1.311.092-1.876 0-.655-.054-1.455-.118-2.177-.107-1.198-.976-2.175-2.14-2.477a2.95 2.95 0 0 0-1.483 0c-1.164.302-2.033 1.28-2.14 2.477a26 26 0 0 0-.12 2.177c0 .565.041 1.238.094 1.877.05.62-.462 1.153-1.08 1.072-4.908-.645-6.013-3.01-6.013-9.795 0-1.011.026-1.924.084-2.748q-.152.186-.303.373a1.001 1.001 0 0 1-1.562-1.25 47.1 47.1 0 0 1 9.41-8.91L11.93.186z\"/>",
  regular: "",
  light: "",
} as const;

export default function Home_3Fill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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