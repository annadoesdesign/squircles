import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c3.795 0 8.742 5.185 10.907 7.684.727.84 1.093 1.919 1.093 3.03V16c0 5.9-1.387 6.824-7.628 6.97a82 82 0 0 1-2.05.025 557 557 0 0 1-5.292-.004 112 112 0 0 1-1.413-.022C1.898 22.822.512 21.896.512 16v-5.285c0-1.043.322-2.056.962-2.871l.132-.16C3.77 5.184 8.717 0 12.512 0m0 14c-2.002 0-2.238.354-2.366.56-.147.235-.33.705-.456 1.645-.125.927-.178 2.152-.178 3.795q0 .522.008.991c.896.008 1.887.009 2.992.009s2.096-.001 2.991-.009q.009-.47.01-.991c0-1.643-.054-2.868-.178-3.795-.127-.94-.31-1.41-.457-1.645-.12-.193-.334-.516-2.01-.556zm0-12c-.514 0-1.213.184-2.094.632-.864.44-1.786 1.075-2.71 1.826-1.851 1.502-3.542 3.324-4.59 4.535-.385.444-.606 1.046-.606 1.722V16c0 1.73.13 2.77.358 3.425.184.53.408.755.778.938.503.249 1.358.444 2.9.543q.46.029.971.046A65 65 0 0 1 7.512 20c0-6.667.834-8 5-8s5 1.333 5 8q0 .495-.008.952.513-.017.973-.046c1.541-.1 2.396-.294 2.9-.543.37-.183.593-.408.778-.938.227-.655.357-1.695.357-3.425v-5.285c0-.676-.22-1.278-.605-1.722-1.049-1.21-2.74-3.033-4.59-4.535-.925-.75-1.847-1.386-2.711-1.826-.88-.448-1.58-.632-2.094-.632\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function HomeDashboardHouseStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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