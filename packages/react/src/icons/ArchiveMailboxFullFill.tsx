import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M17.512 10a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM12.512 5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2z\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M13.274.005c7.674.1 9.238 1.826 9.238 9.495l-.005.724q-.01.637-.039 1.217c1.584 1.037 2.044 2.76 2.044 5.559l-.006.533C24.38 22.905 22.2 24 12.512 24l-.914-.004C2.686 23.924.641 22.732.518 17.533L.512 17c0-2.799.46-4.522 2.044-5.559q-.044-.9-.044-1.941c0-7.917 1.667-9.5 10-9.5zM12.512 2c-2.046 0-3.55.1-4.677.33-1.109.227-1.704.554-2.07.901-.357.34-.682.876-.912 1.887-.236 1.04-.34 2.445-.34 4.382s.104 3.342.34 4.382l.03.118H6.27a4 4 0 0 1 2.828 1.172l.242.242c.375.375.884.586 1.414.586h3.516c.53 0 1.04-.211 1.414-.586l.242-.242A4 4 0 0 1 18.754 14h1.387q.016-.058.03-.118c.236-1.04.341-2.445.341-4.382s-.105-3.342-.34-4.382c-.23-1.011-.556-1.547-.913-1.887-.366-.347-.96-.674-2.07-.9C16.063 2.098 14.559 2 12.512 2\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function ArchiveMailboxFullFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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