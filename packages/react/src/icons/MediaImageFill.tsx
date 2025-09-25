import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M6.939 15.83c.982 0 2.097.342 3.545 1.276 1.467.947 3.155 2.422 5.255 4.522a63 63 0 0 1 1.978 2.063c-1.431.222-3.149.309-5.205.309C5.4 24 2.335 22.988 1.158 18.806c.808-.69 1.547-1.253 2.237-1.699 1.448-.933 2.562-1.277 3.544-1.277\"/><path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 6.755-.913 9.859-4.588 11.162a57 57 0 0 0-2.771-2.948c-7.041-7.041-10.586-8.256-16.42-3.647C.576 15.271.513 13.76.513 12c0-10 2-12 12-12m4 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function MediaImageFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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