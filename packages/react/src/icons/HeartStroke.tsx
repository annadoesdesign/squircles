import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.13 2.534a6.98 6.98 0 0 1 9.822 1.093c2.41 3.019 1.876 9.28-.44 12.373l-.231.297c-2.461 3.049-7.154 5.472-9.002 6.349-.432.205-.917.23-1.362.076l-.188-.077c-1.845-.878-6.526-3.3-8.986-6.348L2.513 16C.196 12.907-.328 6.646 2.084 3.627a6.98 6.98 0 0 1 9.822-1.093l.597.466zm8.26 2.341a4.98 4.98 0 0 0-7.01-.78l-.028.022-.028.022-.626.466a2 2 0 0 1-2.425-.028l-.596-.466-.01-.008-.011-.008a4.98 4.98 0 0 0-7.008.78c-.778.975-1.23 2.73-1.124 4.81.105 2.055.734 3.975 1.59 5.117.983 1.314 2.58 2.596 4.277 3.7a37.5 37.5 0 0 0 4.114 2.296 38 38 0 0 0 4.123-2.297c1.7-1.104 3.3-2.386 4.283-3.7.856-1.143 1.49-3.064 1.597-5.12.108-2.08-.341-3.833-1.119-4.806\"/>",
  light: "",
} as const;

export default function HeartStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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