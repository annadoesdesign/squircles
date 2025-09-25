import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M144.198 1.99a10.67 10.67 0 0 1 11.083-.813 10.67 10.67 0 0 1 5.781 9.49v74.666h61.646c8.77 0 14.683 8.971 11.229 17.032a357.6 357.6 0 0 1-93.219 128.271l-25.958 22.729a10.68 10.68 0 0 1-11.865 1.479 10.68 10.68 0 0 1-5.791-10.469l8.562-95.042H32a10.66 10.66 0 0 1-9.25-5.364 10.67 10.67 0 0 1 .041-10.698A416 416 0 0 1 139.948 5.021z\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M143.667 1.99a10.67 10.67 0 0 1 11.084-.813 10.67 10.67 0 0 1 5.781 9.49v74.666h61.646c8.769 0 14.683 8.971 11.229 17.032a357.65 357.65 0 0 1-93.219 128.271l-25.958 22.729a10.68 10.68 0 0 1-11.865 1.479 10.68 10.68 0 0 1-5.791-10.469l8.562-95.042H31.469a10.66 10.66 0 0 1-9.25-5.364 10.67 10.67 0 0 1 .042-10.698A416 416 0 0 1 139.417 5.021zm-4.468 29.823A394.6 394.6 0 0 0 50.626 128h66.177a10.68 10.68 0 0 1 7.875 3.469 10.68 10.68 0 0 1 2.75 8.156l-7.219 80.146 5.937-5.188c34.368-30.072 62.181-66.812 81.855-107.916h-58.136c-5.89-.001-10.666-4.776-10.666-10.667z\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M145.219 4.156a8.01 8.01 0 0 1 8.312-.604 8 8 0 0 1 4.334 7.114V88h64.312c6.856 0 11.482 7.011 8.782 13.312a355 355 0 0 1-92.521 127.323l-25.969 22.719a8 8 0 0 1-8.896 1.104 8 8 0 0 1-4.344-7.844l8.823-97.948H31.469a8.004 8.004 0 0 1-6.906-12.041A413.3 413.3 0 0 1 140.959 7.198zm-3.354 22.23a397.3 397.3 0 0 0-96.115 104.28h71.052a8 8 0 0 1 5.907 2.605 8 8 0 0 1 2.062 6.114l-7.823 86.781 10.948-9.573A339 339 0 0 0 212.24 104h-62.375a8 8 0 0 1-8-8z\"/>",
} as const;

export default function LightningBolt(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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