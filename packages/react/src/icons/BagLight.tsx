import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c3.554 0 5.084.843 5.673 4.322 5.137.79 6.327 3.249 6.327 9.678 0 8.333-2 10-12 10s-12-1.667-12-10c0-6.428 1.19-8.888 6.324-9.678C7.426.842 8.958 0 12.512 0m10.333 10.69a16.7 16.7 0 0 1-4.583 2.548V14a.75.75 0 0 1-1.5 0v-.291a16.8 16.8 0 0 1-8.5 0V14a.75.75 0 0 1-1.5 0v-.762a16.7 16.7 0 0 1-4.584-2.548c-.111.897-.166 1.984-.166 3.31 0 4.207.552 6.008 1.71 6.973.6.5 1.505.898 2.962 1.16 1.46.262 3.353.367 5.828.367s4.369-.105 5.828-.367c1.457-.262 2.363-.66 2.962-1.16 1.158-.965 1.71-2.766 1.71-6.973 0-1.326-.055-2.413-.167-3.31M12.512 5.5c-2.475 0-4.368.105-5.828.367-1.457.262-2.362.66-2.962 1.16-.57.476-.994 1.155-1.277 2.226a.75.75 0 0 1 .536.161 15.2 15.2 0 0 0 3.781 2.217V11a.75.75 0 0 1 1.5 0v1.151c2.774.804 5.726.804 8.5 0V11a.75.75 0 0 1 1.5 0v.63a15.2 15.2 0 0 0 3.782-2.216.75.75 0 0 1 .535-.161c-.283-1.07-.706-1.75-1.277-2.226-.6-.5-1.505-.898-2.962-1.16-1.46-.262-3.352-.367-5.828-.367m0-4c-2.42 0-3.155.424-3.589 1.146-.2.334-.38.808-.525 1.494C9.59 4.04 10.954 4 12.512 4s2.92.04 4.113.14c-.146-.686-.324-1.16-.524-1.494-.434-.722-1.169-1.146-3.589-1.146\" clip-rule=\"evenodd\"/>",
} as const;

export default function BagLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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