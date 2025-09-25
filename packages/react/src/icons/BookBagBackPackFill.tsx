import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M2.622 10.267a30.2 30.2 0 0 1 19.78 0c.076.954.11 2.027.11 3.233 0 8.75-1.666 10.5-10 10.5s-10-1.75-10-10.5c0-1.206.033-2.28.11-3.233M9.512 12a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1\" clip-rule=\"evenodd\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.893.006c2.29.07 3.487.81 4.084 3.283 3.035.522 4.492 1.851 5.12 4.773a32.2 32.2 0 0 0-19.17 0c.627-2.921 2.084-4.25 5.118-4.773C8.675.682 9.973 0 12.512 0zM12.513 2c-.937 0-1.417.11-1.682.236-.18.086-.364.22-.561.654a4 4 0 0 0-.071.169q1.059-.06 2.313-.059 1.253-.001 2.312.059a3 3 0 0 0-.07-.17c-.197-.433-.38-.567-.56-.653-.265-.125-.746-.236-1.682-.236\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function BookBagBackPackFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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