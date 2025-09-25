import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 1.108-.027 2.117-.085 3.037-7.218.267-9.41 2.157-9.83 8.926q-.98.037-2.085.037c-10 0-12-2-12-12s2-12 12-12M7.796 12.716a6 6 0 0 0-1.64 3.065l-.35 1.748a1 1 0 0 0 1.177 1.177l1.748-.35a6 6 0 0 0 3.065-1.64l5.01-5.009-4-4zM15.926 5a1 1 0 0 0-.707.293l-1 1 4 4 1-1a1 1 0 0 0 .293-.707V8a3 3 0 0 0-3-3z\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M24.227 17.046c-.665 4.572-2.66 6.293-7.62 6.787.068-.97.176-1.796.329-2.505.293-1.36.724-2.148 1.24-2.664s1.305-.947 2.664-1.24c.915-.197 2.027-.318 3.387-.378\"/>",
  regular: "",
  light: "",
} as const;

export default function NotePadFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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