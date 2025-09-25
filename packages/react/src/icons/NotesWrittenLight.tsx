import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.512 10.5a.75.75 0 0 1 0 1.5h-10a.75.75 0 0 1 0-1.5zM13.512 6.5a.75.75 0 0 1 0 1.5h-6a.75.75 0 1 1 0-1.5z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512.25c2.307 0 4.204.114 5.744.446 1.55.334 2.787.9 3.724 1.836.937.937 1.502 2.175 1.836 3.724.332 1.54.446 3.437.446 5.744q0 1.197-.047 2.256h.012l-.05.7q-.02.294-.046.577l-.014.17a24 24 0 0 1-.06.559l-.033.26a17 17 0 0 1-.176 1.05l-.046.222a12 12 0 0 1-.252.945q-.026.087-.054.171a9 9 0 0 1-.405.984 7 7 0 0 1-.112.218q-.046.085-.095.166c-.03.051-.056.103-.087.153l-.022.034-.023.036a6 6 0 0 1-.205.3q-.01.014-.02.027c-.627.852-1.438 1.463-2.443 1.9l-.046.021q-.171.073-.348.139l-.044.017q-.191.07-.39.132l-.023.008q-.2.062-.406.118l-.029.008a15 15 0 0 1-2.203.396 26 26 0 0 1-1.3.106l-.16.009q-.355.02-.725.034l-.613.026v-.008q-.62.016-1.285.016c-2.306 0-4.204-.114-5.744-.446-1.549-.334-2.787-.9-3.724-1.836-.936-.937-1.501-2.175-1.836-3.724C.876 16.204.763 14.307.763 12s.114-4.204.446-5.744c.335-1.549.9-2.787 1.836-3.724C3.981 1.596 5.22 1.03 6.768.696 8.308.364 10.206.25 12.512.25m0 1.5c-2.277 0-4.046.115-5.428.413-1.373.296-2.312.762-2.979 1.43s-1.134 1.606-1.43 2.98c-.298 1.38-.413 3.15-.413 5.427s.115 4.046.413 5.428c.296 1.373.763 2.312 1.43 2.98.667.667 1.606 1.133 2.98 1.429 1.381.298 3.15.413 5.427.413q.735-.001 1.402-.02c.258-2.664.903-4.617 2.365-5.919 1.451-1.29 3.568-1.81 6.43-1.985q.053-1.059.053-2.326c0-2.277-.115-4.046-.413-5.428-.296-1.373-.762-2.312-1.43-2.98-.667-.667-1.606-1.133-2.98-1.429-1.38-.298-3.15-.413-5.427-.413m10.082 14.087c-2.657.183-4.282.673-5.318 1.595-1.01.898-1.588 2.325-1.847 4.728 2.658-.182 4.284-.672 5.32-1.594 1.009-.897 1.587-2.324 1.845-4.73\" clip-rule=\"evenodd\"/>",
} as const;

export default function NotesWrittenLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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