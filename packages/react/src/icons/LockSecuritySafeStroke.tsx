import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 13c2.5 0 3 .5 3 3 0 2.344-.44 2.93-2.555 2.994l-.445.006c-2.344 0-2.93-.44-2.994-2.555L9.512 16c0-2.344.44-2.93 2.555-2.994zm0 2c-.453 0-.753.02-.952.047a7 7 0 0 0-.048.953c0 .453.02.753.048.952.2.027.499.048.952.048.454 0 .754-.02.953-.048.028-.199.047-.499.047-.952 0-.454-.02-.754-.047-.953a7 7 0 0 0-.953-.047\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c4 0 8 1.5 8 9q0 .204-.003.401c1.563 1.152 2.003 3.17 2.003 6.599 0 6.667-1.666 8-10 8s-10-1.333-10-8c0-3.438.443-5.457 2.015-6.607l-.013.008L4.512 9c0-7.5 4-9 8-9m0 10c-2.052 0-3.582.084-4.738.283-1.155.2-1.775.489-2.138.779-.641.513-1.124 1.564-1.124 4.938s.483 4.425 1.124 4.939c.363.29.983.578 2.138.778 1.156.2 2.686.283 4.738.283s3.582-.084 4.738-.283c1.156-.2 1.776-.488 2.138-.778.641-.514 1.124-1.565 1.124-4.939s-.483-4.425-1.124-4.938c-.362-.29-.982-.58-2.138-.779S14.565 10 12.513 10M6.52 8.507C7.973 8.128 9.92 8 12.512 8s4.539.13 5.991.508c-.082-3.075-.939-4.555-1.808-5.316C15.73 2.35 14.318 2 12.512 2s-3.218.349-4.182 1.192c-.87.76-1.727 2.24-1.81 5.315\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function LockSecuritySafeStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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