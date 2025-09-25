import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M13.046.005c3.81.075 5.466 1.012 6.108 4.432q1.785.23 3.555.583a1 1 0 0 1-.393 1.96 50 50 0 0 0-.972-.183c.891 1.52 1.168 3.808 1.168 7.203 0 6.943-1.157 9.259-6.363 9.838-1.042.116-2.247.162-3.637.162-8.333 0-10-1.667-10-10 0-3.394.276-5.683 1.167-7.203q-.486.087-.97.183a1 1 0 0 1-.393-1.96 52 52 0 0 1 3.553-.583C6.539.86 8.322 0 12.513 0zM9.753 9.03a1 1 0 0 0-1.211.728 17.5 17.5 0 0 0 0 8.484 1 1 0 0 0 1.939-.484 15.5 15.5 0 0 1 0-7.516 1 1 0 0 0-.728-1.212m6.728.728a1 1 0 0 0-1.94.484 15.5 15.5 0 0 1 0 7.516 1 1 0 1 0 1.94.484c.696-2.785.696-5.699 0-8.484M12.513 2c-2.899 0-3.658.464-4.049 1.021-.172.247-.346.617-.496 1.188a52 52 0 0 1 1.761-.124A39 39 0 0 1 12.512 4c1.025 0 1.95.025 2.782.085q.88.047 1.76.124c-.15-.57-.32-.94-.492-1.188-.39-.557-1.15-1.02-4.049-1.021\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function TrashCanTrashBinFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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