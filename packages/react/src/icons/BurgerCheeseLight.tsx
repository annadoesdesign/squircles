import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "",
  light: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"12\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.602 0c2 0 8 0 10 2 1.897 1.897 2.362 6.49 1.125 7.813l.121.25c.265.591.414 1.247.414 1.937v6.5a2.24 2.24 0 0 1-.526 1.443c-.29.706-.667 1.339-1.134 1.806-2 2-8 2-10 2s-8 0-10-2c-1.49-1.49-2.196-4.643-1.84-6.568v-2.343c0-.635.103-1.267.304-1.87l.347-1.045C.042 8.77.648 3.954 2.602 2c2-2 8-2 10-2m-4.34 17.75v.75a2.248 2.248 0 0 1-4.494.116 2.24 2.24 0 0 1-1.193.09c.272.838.659 1.553 1.087 1.983.257.256.747.539 1.524.788.754.243 1.654.415 2.602.534 1.897.237 3.812.238 4.814.238s2.918-.001 4.814-.238c.948-.119 1.848-.291 2.602-.534.768-.246 1.255-.527 1.514-.78a2.25 2.25 0 0 1-1.77-2.197v-.75h-2.879a2.248 2.248 0 0 1-3.741 0zm14.028-7.437c-3.9.574-15.377.582-19.432.019l-.37 1.11c-.15.45-.226.922-.226 1.396V16.5a.75.75 0 0 0 1.5 0V14a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 0 1.5 0V16a3.75 3.75 0 0 1 3.75-3.75h.5a3.25 3.25 0 0 1 3.25 3.25v1a.75.75 0 0 0 1.5 0V14a2.75 2.75 0 0 1 5.5 0v4.5a.75.75 0 0 0 1.5 0V12c0-.618-.172-1.196-.472-1.687M10.512 13.75A2.25 2.25 0 0 0 8.262 16v.25h4.5v-.75a1.75 1.75 0 0 0-1.75-1.75zm8-1c-.69 0-1.25.56-1.25 1.25v2.25h2.5V14c0-.69-.56-1.25-1.25-1.25M12.602 1.5c-1.002 0-2.917.001-4.814.238-.948.119-1.848.291-2.602.533-.777.25-1.267.533-1.524.79-.673.673-1.241 2.052-1.43 3.506-.09.701-.077 1.314.009 1.756.04.209.088.331.12.399.153.037.375.079.675.12.61.087 1.438.162 2.428.223 1.975.123 4.505.185 7.048.185s5.073-.062 7.048-.185a33 33 0 0 0 2.429-.222q.458-.066.686-.123c.035-.068.093-.201.145-.434.098-.447.128-1.062.057-1.76-.147-1.453-.68-2.81-1.336-3.465-.256-.257-.746-.54-1.523-.79-.754-.242-1.653-.414-2.602-.533-1.896-.237-3.812-.238-4.814-.238\" clip-rule=\"evenodd\"/>",
} as const;

export default function BurgerCheeseLight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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