import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M22.38 11.996c-.375 3.528-1.65 5.08-4.953 5.676-.293 5.172-1.452 6.324-4.915 6.324s-4.623-1.151-4.916-6.324c-3.302-.597-4.576-2.149-4.952-5.676h-.022a27 27 0 0 1-.105-2.085l-.005-.686c0-1.971.228-3.526.682-4.747l.094-.239C4.593 1.061 8.272 3.56 14.865.99l.647-.265c7-3 7 3.933 7 8.5l-.005.686q-.016 1.138-.104 2.085zm-17.723 0c.125 1.034.328 1.733.601 2.226.338.61.897 1.105 2.384 1.42l.31.062.168.037a2 2 0 0 1 1.473 1.817c.148 2.602.513 3.572.825 3.954.158.196.494.484 2.094.484s1.935-.288 2.094-.483c.311-.383.677-1.353.824-3.955a2 2 0 0 1 1.642-1.854c1.722-.31 2.334-.832 2.694-1.482.274-.493.475-1.192.6-2.226zm14.32-9.938c-.347-.105-1.14-.153-2.677.505-3.862 1.655-6.904 1.718-8.927 1.812-1.074.05-1.574.107-1.888.225-.126.048-.215.076-.348.399-.38.924-.625 2.266-.625 4.226q0 .404.008.77h15.984q.008-.366.008-.77c0-1.156 0-2.358-.101-3.502-.102-1.162-.296-2.1-.595-2.76-.28-.619-.568-.822-.839-.905\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function PaintBrushStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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