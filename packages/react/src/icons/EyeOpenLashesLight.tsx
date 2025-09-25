import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 11a3 3 0 1 1 0 6 3 3 0 0 1 0-6\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 2.25a.75.75 0 0 1 .75.75v2l-.002.025c2.579.17 4.827 1.208 6.557 2.609l1.165-1.164a.75.75 0 1 1 1.06 1.06l-1.119 1.118c1.106 1.151 1.898 2.44 2.295 3.662a.75.75 0 0 1 .825 1.22l-.5.5-.034.03-.01.283C23.223 17.933 18.729 23 12.512 23l-.3-.004c-6.06-.16-10.415-5.121-10.686-8.653l-.012-.283-.032-.03-.5-.5a.75.75 0 0 1 .823-1.22C2.203 11.09 2.994 9.8 4.1 8.648L2.982 7.53a.75.75 0 1 1 1.06-1.06l1.165 1.164c1.73-1.4 3.978-2.438 6.556-2.609V3a.75.75 0 0 1 .75-.75m0 4.25c-2.776 0-5.174 1.168-6.888 2.752C3.862 10.879 3.012 12.758 3.012 14s.85 3.12 2.612 4.748c1.714 1.584 4.112 2.752 6.888 2.752s5.175-1.168 6.889-2.752c1.761-1.628 2.611-3.507 2.611-4.748s-.85-3.12-2.611-4.748C17.687 7.668 15.288 6.5 12.512 6.5\" clip-rule=\"evenodd\"/>",
} as const;

export default function EyeOpenLashesLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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