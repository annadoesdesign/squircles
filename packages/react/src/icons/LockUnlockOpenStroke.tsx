import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 13c2.5 0 3 .5 3 3 0 2.344-.44 2.93-2.555 2.994l-.445.006c-2.344 0-2.93-.44-2.994-2.555L9.512 16c0-2.344.44-2.93 2.555-2.994zm0 2c-.453 0-.753.02-.952.047a7 7 0 0 0-.048.953c0 .453.02.753.048.952.2.027.499.048.952.048.454 0 .754-.02.953-.048.028-.199.047-.499.047-.952 0-.454-.02-.754-.047-.953a7 7 0 0 0-.953-.047\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c4 0 8 1.5 8 9q-.001.204-.004.401c1.563 1.152 2.004 3.17 2.004 6.599 0 6.667-1.666 8-10 8s-10-1.333-10-8c0-3.629.496-5.674 2.29-6.788a.8.8 0 0 1 .32-.183C6.639 8.242 8.974 8 12.512 8c2.593 0 4.54.13 5.992.508-.082-3.075-.94-4.555-1.81-5.316C15.732 2.35 14.319 2 12.513 2c-1.805 0-3.218.35-4.182 1.192-.475.415-.944 1.045-1.288 2.032C6.887 5.67 6.482 6 6.01 6c-.64 0-1.128-.589-.934-1.2C6.312.9 9.412 0 12.512 0m0 10c-2.052 0-3.582.084-4.738.283-1.155.2-1.775.489-2.138.779-.641.513-1.124 1.564-1.124 4.938s.483 4.425 1.124 4.939c.363.29.983.578 2.138.778 1.156.2 2.686.283 4.738.283s3.582-.084 4.738-.283c1.156-.2 1.776-.488 2.138-.778.641-.514 1.124-1.565 1.124-4.939s-.483-4.425-1.124-4.938c-.362-.29-.982-.58-2.138-.779S14.565 10 12.513 10\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function LockUnlockOpenStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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