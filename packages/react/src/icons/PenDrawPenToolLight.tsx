import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M3.314 1.106C7.415.834 18.406.662 21.752 6.238c1.478 2.463 1.207 5.819.548 8.6 2.345 2.762 2.093 4.151-.353 6.597s-3.836 2.698-6.598.353c-2.78.657-6.135.927-8.597-.55C1.177 17.892 1.346 6.903 1.618 2.802a1.807 1.807 0 0 1 1.696-1.696m9.253 1.852c-3.123-.527-6.348-.502-8.433-.397l6.493 6.493q.255-.04.588-.05L11.512 9c1.667 0 2 .333 2 2 0 1.666-.333 2-2 2l-.297-.004c-1.41-.043-1.703-.434-1.703-1.996l.004-.297q.01-.334.05-.589L3.074 3.622c-.105 2.084-.13 5.309.397 8.431.609 3.608 1.87 6.59 4.053 7.899 1.924 1.154 4.762 1.018 7.48.376l.175-.03a1.5 1.5 0 0 1 1.14.346c1.337 1.135 1.97 1.296 2.334 1.269.402-.03 1.017-.322 2.233-1.538s1.508-1.83 1.538-2.233c.028-.363-.133-.996-1.267-2.333a1.5 1.5 0 0 1-.317-1.316c.644-2.72.781-5.559-.374-7.484-1.31-2.182-4.29-3.443-7.9-4.051M11.012 11c0 .21.007.367.017.483.116.01.273.017.483.017.211 0 .368-.007.485-.017a6 6 0 0 0 .015-.483c0-.211-.006-.368-.015-.485a6 6 0 0 0-.485-.015q-.288 0-.455.013l-.014.017-.016.014a6 6 0 0 0-.015.456\" clip-rule=\"evenodd\"/>",
} as const;

export default function PenDrawPenToolLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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