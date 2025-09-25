import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M15.336 13.208c1.55 1.512 3.276 3.676 4.684 5.572.716.965 1.34 1.847 1.803 2.515C20.025 22.61 17.117 23 12.513 23c-4.606 0-7.514-.39-9.312-1.705a97 97 0 0 1 1.803-2.515c1.408-1.896 3.133-4.06 4.683-5.572.918.48 1.874.792 2.825.792s1.907-.312 2.824-.792M1.415 5.043c.682.924 1.53 2.017 2.477 3.111 1.211 1.4 2.607 2.834 4.043 3.924l.03.023C6.382 13.706 4.72 15.81 3.4 17.588a98 98 0 0 0-1.575 2.188C.826 18.105.512 15.626.512 12c0-3.075.226-5.325.903-6.957M23.609 5.043c.677 1.632.903 3.882.903 6.957 0 3.627-.314 6.105-1.312 7.776a97 97 0 0 0-1.575-2.188c-1.32-1.778-2.983-3.882-4.567-5.487l.031-.023c1.436-1.09 2.832-2.523 4.043-3.924a52 52 0 0 0 2.477-3.111M12.512 1c5.18 0 8.214.492 9.935 2.241a52 52 0 0 1-2.827 3.605c-1.168 1.35-2.46 2.666-3.74 3.638C14.57 11.48 13.417 12 12.511 12s-2.057-.52-3.367-1.516c-1.28-.972-2.573-2.289-3.74-3.638A52 52 0 0 1 2.577 3.24C4.297 1.491 7.33 1 12.512 1\"/>",
  regular: "",
  light: "",
} as const;

export default function MailEmailLetterPostFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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