import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "<path fill=\"currentColor\" stroke=\"none\" d=\"M125.904 213.123c-5.774-1.157-9.522-6.776-8.367-12.551 1.157-5.775 6.783-9.515 12.558-8.36 16.453 3.29 33.185 4.186 49.852 2.829L45.795 60.874c-4.166-4.165-4.166-10.919 0-15.085 4.166-4.162 10.92-4.164 15.085 0l134.284 134.299c1.402-16.628.386-33.291-2.954-49.991-1.155-5.775 2.586-11.401 8.36-12.558 5.777-1.156 11.404 2.598 12.559 8.374 5.246 26.229 5.396 52.587-.015 78.902a10.67 10.67 0 0 1-8.411 8.323c-26.029 5.057-52.681 5.209-78.799-.015\"/>",
  regular: "<path fill=\"currentColor\" stroke=\"none\" d=\"M125.905 213.123c-5.774-1.157-9.522-6.776-8.367-12.551 1.157-5.775 6.783-9.515 12.558-8.36 16.453 3.29 33.185 4.186 49.851 2.829L45.797 60.874c-4.166-4.165-4.167-10.919 0-15.085 4.165-4.162 10.92-4.164 15.084 0l134.284 134.299c1.402-16.628.386-33.291-2.954-49.991-1.155-5.775 2.586-11.401 8.36-12.558 5.777-1.156 11.404 2.598 12.559 8.374 5.246 26.229 5.396 52.587-.015 78.902a10.67 10.67 0 0 1-8.411 8.323c-26.029 5.057-52.681 5.209-78.799-.015\"/>",
  light: "<path fill=\"currentColor\" stroke=\"none\" d=\"M126.428 210.508c-4.33-.868-7.142-5.082-6.276-9.413.868-4.331 5.089-7.135 9.421-6.268 18.569 3.713 37.48 4.42 56.252 2.32L47.681 58.989a8 8 0 0 1 11.314-11.314L197.256 185.95c2.195-18.757 1.334-37.552-2.43-56.377-.867-4.331 1.937-8.553 6.268-9.421 4.332-.866 8.554 1.951 9.42 6.283 5.179 25.893 5.322 51.89-.014 77.841a8 8 0 0 1-6.305 6.246c-25.703 4.993-52.004 5.138-77.767-.015\"/>",
} as const;

export default function ArrowDownRight(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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