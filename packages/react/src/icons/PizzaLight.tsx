import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M9.262 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5\" clip-rule=\"evenodd\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c6.111 0 11 2.4 11 6 0 .803-.149 1.795-.38 2.852l-.12.514c-1.31 5.3-4.684 9.819-8.557 13.692l-.21.188a2.75 2.75 0 0 1-3.466 0l-.21-.188c-3.872-3.873-7.247-8.392-8.556-13.692l-.12-.514c-.232-1.057-.38-2.05-.38-2.852 0-3.6 4.888-6 11-6m8.802 9.885a13.5 13.5 0 0 0-17.605 0c1.356 4.55 4.36 8.55 7.921 12.112a1.247 1.247 0 0 0 1.764 0 48 48 0 0 0 1.993-2.118 4.25 4.25 0 0 1-1.23-2.03 4.252 4.252 0 0 1 4.66-5.313c.457.06.901.196 1.314.399.473-.989.871-2.005 1.183-3.05m-2.692 4.138a2.753 2.753 0 0 0-3.086 2.368 2.75 2.75 0 0 0 .545 2.033q.129.166.282.31c1.166-1.423 2.211-2.909 3.079-4.466a2.8 2.8 0 0 0-.82-.245M12.512 1.5c-2.883 0-5.376.57-7.09 1.477C3.688 3.892 3.011 4.98 3.011 6c0 .59.106 1.369.295 2.276a15 15 0 0 1 18.41.001c.188-.908.295-1.687.295-2.277 0-1.019-.677-2.108-2.409-3.023-1.714-.907-4.207-1.477-7.09-1.477\" clip-rule=\"evenodd\"/>",
} as const;

export default function PizzaLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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