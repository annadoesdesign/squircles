import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M130.095 213.123c5.775-1.157 9.523-6.776 8.368-12.551-1.157-5.774-6.777-9.52-12.551-8.367-16.456 3.291-33.195 4.187-49.866 2.828L210.205 60.874c4.165-4.165 4.165-10.92 0-15.085-4.166-4.162-10.921-4.164-15.085 0L60.836 180.073c-1.4-16.625-.379-33.287 2.96-49.983 1.154-5.775-2.593-11.395-8.367-12.552-5.775-1.155-11.394 2.593-12.55 8.368-5.247 26.23-5.405 52.592.007 78.909a10.67 10.67 0 0 0 8.411 8.323c26.029 5.057 52.68 5.209 78.798-.015\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M130.095 213.123c5.775-1.157 9.523-6.776 8.368-12.551-1.157-5.774-6.777-9.52-12.551-8.367-16.456 3.291-33.195 4.187-49.866 2.828L210.205 60.874c4.165-4.165 4.165-10.92 0-15.085-4.166-4.162-10.921-4.164-15.085 0L60.836 180.073c-1.4-16.625-.379-33.287 2.96-49.983 1.154-5.775-2.593-11.395-8.367-12.552-5.775-1.155-11.394 2.593-12.55 8.368-5.247 26.23-5.405 52.592.007 78.909a10.67 10.67 0 0 0 8.411 8.323c26.029 5.057 52.68 5.209 78.798-.015\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M129.573 210.508a8.003 8.003 0 0 0 6.276-9.413 8.006 8.006 0 0 0-9.414-6.276c-18.574 3.716-37.496 4.43-56.273 2.328L208.32 58.988a8 8 0 0 0-11.314-11.313L58.745 185.936c-2.192-18.754-1.327-37.548 2.438-56.369a8.006 8.006 0 0 0-6.276-9.414 8.003 8.003 0 0 0-9.413 6.276c-5.18 25.895-5.33 51.895.007 77.848a8 8 0 0 0 6.305 6.246c25.703 4.993 52.004 5.138 77.767-.015\"/>",
} as const;

export default function ArrowDownLeft(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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