import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M13.512 0c9.167 0 11 2 11 12s-1.833 12-11 12c-6.92 0-9.659-1.14-10.587-6H1.512a1 1 0 1 1 0-2h1.146c-.08-.9-.123-1.897-.138-3H1.512a1 1 0 1 1 0-2H2.52c.015-1.103.059-2.1.138-3H1.512a1 1 0 0 1 0-2h1.413c.928-4.86 3.668-6 10.587-6m-4 14a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm0-6a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function NotebookFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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