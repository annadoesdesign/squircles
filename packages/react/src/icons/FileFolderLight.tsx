import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M6.012 1c2.362 0 3.748.399 4.538 1.81.22-.322.485-.598.806-.824.839-.59 1.921-.736 3.156-.736s2.317.146 3.157.736c.773.544 1.218 1.377 1.487 2.464 4.318.858 5.356 3.147 5.356 8.55 0 6.25-1.389 8.332-7.637 8.854-1.25.104-2.695.146-4.363.146-10 0-12-1.5-12-9q0-.651.022-1.242A67 67 0 0 1 .512 10c0-7.5.917-9 5.5-9m0 1.5c-2.221 0-2.832.386-3.188.97-.243.397-.464 1.05-.61 2.156C2.07 6.722 2.012 8.143 2.012 10a65 65 0 0 0 .02 1.813q-.02.561-.02 1.187c0 3.761.545 5.283 1.65 6.112.602.452 1.52.817 2.996 1.056 1.472.238 3.376.332 5.854.332 1.646 0 3.046-.042 4.238-.142 3.056-.255 4.413-.87 5.13-1.738.756-.917 1.132-2.497 1.132-5.62 0-3.761-.544-5.283-1.65-6.112-.602-.452-1.52-.817-2.995-1.056-1.473-.238-3.376-.332-5.855-.332q-.762 0-1.462.014a1.5 1.5 0 0 1-1.268-.659h-.005v-.007a1.5 1.5 0 0 1-.201-.442c-.257-.945-.59-1.294-.94-1.492-.45-.253-1.207-.414-2.624-.414m8.5.25c-1.173 0-1.853.153-2.293.463-.235.165-.444.41-.623.795Q12.043 4 12.512 4c1.96 0 3.611.059 5.001.208-.196-.504-.434-.803-.708-.995-.44-.31-1.12-.463-2.293-.463\" clip-rule=\"evenodd\"/>",
} as const;

export default function FileFolderLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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