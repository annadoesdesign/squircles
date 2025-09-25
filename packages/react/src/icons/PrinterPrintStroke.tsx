import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18.512 9a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2z\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.384 0c6.24 0 8.324 1.097 8.849 6.025 2.59 1.113 3.28 3.318 3.28 7.475 0 4.643-.861 6.848-4.27 7.818-.77 2.115-3.239 2.682-7.73 2.682l-.597-.004c-4.114-.05-6.397-.659-7.134-2.677-3.41-.97-4.27-3.175-4.27-7.819 0-4.007.64-6.201 3.007-7.35C4.022 1.114 6.092 0 12.384 0M7.198 16c-.195.51-.368 1.122-.503 1.86-.456 2.493.035 3.061.342 3.295.27.207.778.44 1.73.607.942.164 2.167.238 3.745.238s2.803-.074 3.745-.238c.952-.167 1.46-.4 1.73-.607.307-.234.799-.802.343-3.295a10.5 10.5 0 0 0-.503-1.86zm5.314-9c-2.473 0-4.351.09-5.792.31-1.448.22-2.287.551-2.802.916-.856.606-1.406 1.743-1.406 5.274s.55 4.668 1.406 5.274q.246.174.604.334l.002.048q.027-.544.122-1.17l.082-.486q.158-.862.384-1.584a1 1 0 0 1 .4-1.916h14a1 1 0 0 1 .4 1.916q.227.722.384 1.584.165.905.203 1.656l.003-.048q.359-.16.604-.334c.856-.606 1.406-1.743 1.406-5.274s-.55-4.668-1.406-5.274c-.515-.365-1.354-.695-2.802-.916-1.44-.22-3.319-.31-5.792-.31m-.128-5c-1.832 0-3.153.1-4.126.321-.944.215-1.43.516-1.734.836-.312.33-.615.876-.828 1.92q-.04.19-.074.399C7.33 5.124 9.576 5 12.512 5c2.785 0 4.949.11 6.622.422q-.029-.18-.061-.346c-.213-1.043-.516-1.59-.828-1.919-.303-.32-.79-.62-1.735-.836C15.537 2.1 14.217 2 12.384 2\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PrinterPrintStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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