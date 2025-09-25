import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M12.512 1a1 1 0 0 1 0 2c-2.063 0-3.645.104-4.867.368-1.211.261-2.001.664-2.55 1.214-.55.55-.953 1.34-1.215 2.55-.263 1.223-.368 2.804-.368 4.868 0 2.063.105 3.645.368 4.867.262 1.211.665 2.001 1.214 2.55.55.55 1.34.953 2.551 1.215 1.222.263 2.804.368 4.867.368s3.645-.105 4.867-.368c1.211-.262 2.002-.665 2.551-1.214.55-.55.953-1.34 1.214-2.551.264-1.222.368-2.804.368-4.867a1 1 0 1 1 2 0c0 2.103-.104 3.855-.413 5.289-.312 1.445-.846 2.634-1.755 3.543s-2.098 1.443-3.543 1.755c-1.434.309-3.186.413-5.289.413s-3.855-.104-5.289-.413c-1.445-.312-2.634-.846-3.543-1.755-.908-.909-1.443-2.098-1.755-3.543-.309-1.434-.413-3.186-.413-5.29 0-2.102.104-3.854.413-5.288.312-1.445.847-2.635 1.755-3.543.909-.909 2.098-1.443 3.543-1.755C8.657 1.103 10.41 1 12.513 1\"/><path fill=\"currentColor\" stroke=\"none\" d=\"M17.316 1.02a13.8 13.8 0 0 1 5.058-.063l.335.062.004.001q.065.014.127.035l.012.004.01.004q.105.039.2.102l.018.012.022.017a1 1 0 0 1 .096.08l.021.019.023.025a1 1 0 0 1 .078.095l.02.028a1 1 0 0 1 .063.105l.016.037q.018.037.032.076l.01.03q.016.048.028.1.001.008.004.015c.356 1.78.356 3.612 0 5.392a1 1 0 0 1-1.961-.393c.173-.867.244-1.75.22-2.63l-9.657 9.658a1 1 0 0 1-1.414-1.414l9.656-9.657c-.88-.025-1.761.047-2.628.22a1 1 0 0 1-.393-1.96\"/>",
  regular: "",
  light: "",
} as const;

export default function LinkOutLinkFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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