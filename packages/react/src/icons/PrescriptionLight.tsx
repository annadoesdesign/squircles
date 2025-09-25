import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.512 10.25a.75.75 0 0 1 .75.75v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25V17a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25V11a.75.75 0 0 1 .75-.75\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c7.213 0 8.002 1.07 8.032 5.785 1.533 1.445 1.968 3.96 1.968 8.215 0 8.333-1.666 10-10 10s-10-1.667-10-10c0-4.254.435-6.77 1.968-8.215C4.51 1.07 5.3 0 12.512 0m6.89 6.77a50.3 50.3 0 0 1-13.781 0l-.113.107c-.48.453-.864 1.135-1.123 2.29-.263 1.176-.373 2.736-.373 4.833 0 2.053.104 3.592.357 4.762.248 1.152.619 1.843 1.079 2.302s1.15.831 2.302 1.08c1.17.252 2.709.356 4.762.356 2.054 0 3.593-.104 4.762-.356 1.152-.249 1.843-.62 2.303-1.08s.83-1.15 1.079-2.302c.22-1.024.328-2.33.351-4.016l.005-.746c0-2.098-.11-3.657-.373-4.833-.259-1.155-.643-1.837-1.124-2.29zm-6.89-5.27c-1.782 0-3.088.067-4.056.222-.975.155-1.467.38-1.733.587-.223.173-.404.422-.535.947-.123.491-.18 1.143-.2 2.05a49 49 0 0 0 1.774.206V5a.75.75 0 1 1 1.5 0v.637q1.25.082 2.5.101V5a.75.75 0 0 1 1.5 0v.738a49 49 0 0 0 2.5-.102V5a.75.75 0 0 1 1.5 0v.512a49 49 0 0 0 1.772-.204c-.02-.909-.076-1.56-.199-2.052-.13-.525-.311-.774-.534-.947-.266-.207-.757-.431-1.732-.587-.726-.116-1.642-.183-2.807-.21z\" clip-rule=\"evenodd\"/>",
} as const;

export default function PrescriptionLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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