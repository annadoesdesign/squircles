import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" fill-rule=\"evenodd\" d=\"M12.512 0c7.655 0 8.074 1.206 8.029 6.693q.35.315.628.703l.028.04q.157.224.292.474l.008.013.048.093.015.03a6 6 0 0 1 .241.56q.025.062.048.124.051.145.097.297.02.067.04.134.047.16.089.33l.032.128q.034.15.065.309l.04.193.029.172q.03.177.057.361l.019.145q.064.475.105 1 .042.544.063 1.146l.003.06.006.166q.018.633.018 1.329c0 5.69-.86 8.108-4.44 9.019q-.465.118-.995.204c-1.238.201-2.742.277-4.565.277-8.333 0-10-1.583-10-9.5q0-.696.019-1.33l.006-.165.011-.29q.006-.145.012-.288a21 21 0 0 1 .148-1.628q.008-.075.018-.149.027-.182.058-.357l.029-.172q.022-.12.047-.235.025-.125.052-.246.031-.131.065-.257.026-.106.055-.207.03-.105.063-.205l.073-.224q.036-.099.074-.193.04-.11.086-.215.068-.159.143-.309l.03-.057.04-.075q.083-.153.174-.297l.035-.054.028-.041.063-.093.029-.04.051-.07a4 4 0 0 1 .13-.162l.043-.052a4 4 0 0 1 .358-.366l.03-.03C4.439 1.206 4.858 0 12.513 0m0 10a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1m0-8c-1.888 0-3.205.077-4.14.243-.935.167-1.27.389-1.396.507-.096.09-.253.283-.363.922-.085.492-.12 1.113-.13 1.941q.479-.149 1.03-.257V5a1 1 0 1 1 2 0v.098q.919-.07 2-.09V5a1 1 0 1 1 2 0v.009q1.079.019 2 .089V5a1 1 0 1 1 2 0v.356a10 10 0 0 1 1.026.257c-.01-.828-.044-1.45-.128-1.941-.11-.64-.268-.832-.364-.922-.126-.118-.46-.34-1.396-.507-.818-.146-1.928-.222-3.457-.24z\" clip-rule=\"evenodd\"/>",
  regular: "",
  light: "",
} as const;

export default function PrescriptionFill(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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