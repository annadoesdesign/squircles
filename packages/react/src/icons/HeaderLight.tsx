import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12s-2 12-12 12-12-2-12-12 2-12 12-12M22.91 8.701a121 121 0 0 0-20.794 0A45 45 0 0 0 2.012 12c0 2.47.125 4.342.435 5.777.306 1.418.77 2.307 1.376 2.912.605.606 1.494 1.07 2.912 1.376 1.435.31 3.307.435 5.777.435s4.343-.125 5.778-.435c1.418-.305 2.306-.77 2.912-1.376s1.07-1.494 1.376-2.912c.31-1.435.434-3.307.434-5.777a45 45 0 0 0-.103-3.299M7.957 1.73q-.659.083-1.222.206c-1.418.305-2.307.77-2.912 1.376-.606.605-1.07 1.494-1.376 2.912q-.097.45-.168.959 2.997-.252 6-.358a11.5 11.5 0 0 0-.322-5.095m9.11 0a11.5 11.5 0 0 0-.323 5.095q3.004.106 6 .358-.072-.51-.166-.96c-.306-1.417-.77-2.306-1.376-2.911-.606-.606-1.494-1.07-2.912-1.376a15 15 0 0 0-1.223-.206M12.512 1.5c-1.133 0-2.14.028-3.037.086.459 1.69.571 3.457.33 5.194q2.707-.06 5.414 0a13 13 0 0 1 .33-5.194 47 47 0 0 0-3.037-.086\" clip-rule=\"evenodd\"/>",
} as const;

export default function HeaderLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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