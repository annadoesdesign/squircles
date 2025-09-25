import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 10a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM12.512 5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.274.005c7.674.1 9.238 1.826 9.238 9.495l-.005.724q-.01.637-.039 1.217c1.584 1.037 2.044 2.76 2.044 5.559l-.006.533C24.38 22.905 22.2 24 12.512 24l-.914-.004C2.686 23.924.641 22.732.518 17.533L.512 17c0-2.799.46-4.522 2.044-5.559q-.044-.9-.044-1.941c0-7.917 1.667-9.5 10-9.5zM2.539 16q-.026.45-.027 1c0 1.383.125 2.267.345 2.861.189.51.453.83.913 1.099.536.313 1.416.596 2.898.782 1.467.185 3.367.258 5.844.258s4.377-.073 5.844-.258c1.483-.186 2.362-.47 2.898-.782.46-.268.725-.588.913-1.099.22-.594.345-1.479.345-2.861q-.001-.55-.026-1h-3.732c-.53 0-1.039.211-1.414.586l-.242.242A4 4 0 0 1 14.27 18h-3.516a4 4 0 0 1-2.828-1.172l-.242-.242A2 2 0 0 0 6.27 16zm9.973-14c-2.046 0-3.55.1-4.677.33-1.109.227-1.704.554-2.07.901-.357.34-.682.876-.912 1.887-.236 1.04-.34 2.445-.34 4.382s.104 3.342.34 4.382l.03.118H6.27a4 4 0 0 1 2.828 1.172l.242.242c.375.375.884.586 1.414.586h3.516c.53 0 1.04-.211 1.414-.586l.242-.242A4 4 0 0 1 18.754 14h1.387q.016-.058.03-.118c.236-1.04.341-2.445.341-4.382s-.105-3.342-.34-4.382c-.23-1.011-.556-1.547-.913-1.887-.366-.347-.96-.674-2.07-.9C16.063 2.098 14.559 2 12.512 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function ArchiveMailboxFullStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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