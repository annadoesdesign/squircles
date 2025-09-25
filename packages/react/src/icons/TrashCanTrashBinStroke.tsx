import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.612 8.005a1 1 0 0 1 .895 1.095l-.162 1.617a33 33 0 0 0 0 6.566l.162 1.617a1 1 0 0 1-1.99.2l-.161-1.618a35 35 0 0 1 0-6.964L8.517 8.9a1 1 0 0 1 1.095-.895M15.413 8.005a1 1 0 0 1 1.094.895l.161 1.618a35 35 0 0 1 0 6.964l-.16 1.618a1 1 0 0 1-1.991-.2l.162-1.617a33 33 0 0 0 0-6.566L14.517 9.1a1 1 0 0 1 .896-1.095\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M13.046.005c3.81.075 5.466 1.012 6.108 4.432q1.785.23 3.554.583a1 1 0 0 1-.392 1.96 50 50 0 0 0-.972-.183c.891 1.52 1.168 3.808 1.168 7.203 0 6.943-1.157 9.259-6.363 9.838l-.399.04a36 36 0 0 1-3.238.122c-8.333 0-10-1.667-10-10 0-3.394.276-5.683 1.167-7.203q-.486.087-.97.183a1 1 0 0 1-.393-1.96 52 52 0 0 1 3.553-.583C6.539.86 8.322 0 12.513 0zm2.015 6.07a50 50 0 0 0-5.099 0 15 15 0 0 0-2.106.27c-1.094.237-1.685.574-2.055.944s-.707.96-.943 2.055c-.241 1.116-.346 2.612-.346 4.656s.105 3.54.346 4.656c.236 1.094.573 1.685.943 2.055s.96.707 2.055.943c1.116.241 2.613.346 4.656.346 1.352 0 2.476-.046 3.415-.15 2.363-.263 3.194-.852 3.655-1.597.607-.98.93-2.75.93-6.253 0-2.044-.105-3.54-.346-4.656-.236-1.094-.573-1.685-.943-2.055s-.96-.707-2.055-.943a15 15 0 0 0-2.107-.272M12.513 2c-2.899 0-3.658.464-4.049 1.021-.173.247-.346.617-.496 1.188a52 52 0 0 1 1.76-.124A39 39 0 0 1 12.513 4c1.025 0 1.95.025 2.782.085q.88.047 1.76.124c-.15-.57-.32-.94-.492-1.188-.39-.557-1.15-1.02-4.049-1.021\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function TrashCanTrashBinStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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