import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: "",
  regular: "<path fill=\"none\" stroke=\"currentColor\" stroke-width=\"16\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill-rule=\"evenodd\" d=\"M12.512 0c1.833 0 12 3.37 12 7 0 .799-1.336 2.067-3.126 3.362l.033-.021c.064.935.093 1.984.093 3.159l-.005.8c-.095 8.057-1.73 9.7-8.995 9.7l-.685-.005c-6.684-.107-8.218-1.898-8.31-9.695l-.005-.8c0-1.175.028-2.224.093-3.16l.076.055c-.417-.301-.81-.6-1.169-.893V17.5a1 1 0 1 1-2 0V7c0-3.63 10.167-7 12-7m-6.97 11.648q-.03.85-.03 1.852c0 2.154.095 3.758.319 4.969.222 1.203.546 1.862.887 2.26C7.371 21.492 8.7 22 12.512 22s5.142-.51 5.794-1.27c.342-.399.665-1.058.888-2.261.224-1.211.318-2.815.318-4.969q0-1.003-.03-1.852C16.635 13.448 13.46 15 12.512 15c-.949 0-4.13-1.554-6.98-3.358zm6.822-9.63a7 7 0 0 0-.466.087c-.387.085-.88.216-1.446.39-1.132.349-2.487.85-3.78 1.455-1.31.613-2.462 1.288-3.255 1.955-.508.428-.73.735-.829.913.172.213.45.501.853.852.87.757 2.102 1.625 3.44 2.458a41 41 0 0 0 3.844 2.127c.57.272 1.052.477 1.421.61.18.064.298.097.366.115.068-.018.187-.051.366-.116.37-.132.852-.337 1.421-.61a41 41 0 0 0 3.844-2.126c1.339-.833 2.57-1.701 3.44-2.458.403-.35.68-.639.852-.852-.098-.178-.32-.485-.828-.913-.792-.667-1.945-1.342-3.255-1.955a30 30 0 0 0-3.78-1.455 19 19 0 0 0-1.445-.39 7 7 0 0 0-.466-.087c-.127-.019-.17-.018-.149-.018.02 0-.021-.001-.148.018\" clip-rule=\"evenodd\"/>",
  light: "",
} as const;

export default function GraduationCapGraduateStudentCollegeStroke(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
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