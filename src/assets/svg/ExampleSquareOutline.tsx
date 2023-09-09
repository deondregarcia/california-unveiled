import React, { useState } from "react";
import { SVGProps } from "react";
import ExampleImage from "../images/ExampleImage.jpg";
import "./ExampleSquare.css";

const ExampleSquareOutline = (props: SVGProps<SVGSVGElement>) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={447.35}
      height={249.206}
      viewBox="0 0 118.361 65.936"
      className="example-square"
      {...props}
    >
      <defs>
        <pattern id="example-image" width={1} height={1}>
          <image href={ExampleImage} x="0" y="-50%" width={150} height={100} />
        </pattern>
      </defs>
      <path
        className="hover-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        d="m35.484 132.71 61.742 27.677 54.645-26.613-54.645-24.839z"
        style={{
          fill: "white",
          stroke: "#000",
          strokeWidth: ".264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(-35.074 -108.792)"
      />
      <path
        className={isHovered ? "square-hover" : "no-hover"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        d="m35.484 132.71 61.742 27.677 54.645-26.613-54.645-24.839z"
        style={{
          fill: "url(#example-image)",
          stroke: "#000",
          strokeWidth: ".264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(-35.074 -108.792)"
      />

      <path
        className={isHovered ? "square-hover" : "no-hover"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        d="m35.129 146.194 62.097 28.387 56.064-29.097-1.774-11.71M35.484 145.839l.355-13.13M97.226 173.871l-.355-13.839"
        style={{
          fill: "none",
          stroke: "#000",
          strokeWidth: ".264583px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        transform="translate(-35.074 -108.792)"
      />
    </svg>
  );
};
export default ExampleSquareOutline;
