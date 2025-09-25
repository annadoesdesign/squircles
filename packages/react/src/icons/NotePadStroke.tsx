import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M16.512 4a4 4 0 0 1 4 4v.586A2 2 0 0 1 19.926 10l-7.423 7.423a7 7 0 0 1-3.576 1.914l-1.748.35a2 2 0 0 1-2.353-2.354l.35-1.748a7 7 0 0 1 1.913-3.576l7.423-7.423A2 2 0 0 1 15.926 4zm-8.009 9.423a5 5 0 0 0-1.367 2.554l-.35 1.749 1.749-.35a5 5 0 0 0 2.554-1.367L16.1 11l-2.587-2.586zM14.926 7l2.586 2.586 1-1V8a2 2 0 0 0-2-2h-.586z\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c10 0 12 2 12 12 0 2.62-.14 4.69-.523 6.32l-.011.045C22.891 22.917 19.868 24 12.512 24c-10 0-12-2-12-12s2-12 12-12m0 2c-2.46 0-4.29.126-5.672.424-1.36.293-2.148.724-2.664 1.24S3.23 4.97 2.936 6.328C2.638 7.71 2.512 9.54 2.512 12s.126 4.29.424 5.672c.293 1.36.724 2.148 1.24 2.664s1.305.947 2.664 1.24c1.382.298 3.212.424 5.672.424.832 0 1.59-.016 2.285-.047.665-4.57 2.662-6.289 7.619-6.783.065-.921.096-1.97.096-3.17 0-2.46-.126-4.29-.424-5.672-.293-1.36-.724-2.148-1.24-2.664s-1.304-.947-2.664-1.24C16.802 2.126 14.972 2 12.512 2m9.661 15.208c-2.038.247-3.172.711-3.873 1.34-.642.579-1.145 1.51-1.45 3.243 2.026-.246 3.158-.705 3.86-1.33l.046-.041c.627-.58 1.117-1.508 1.417-3.212\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function NotePadStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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