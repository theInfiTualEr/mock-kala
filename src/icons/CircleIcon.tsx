import * as React from "react";

interface Props {
  height: number;
  width: number;
  fill: string;
}

const CircleIcon: React.FC<Props> = ({ height, width, fill }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    style={{
    //   enableBackground: "new 0 0 50 50",
    }}
    viewBox="0 0 50 50"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M25 1C11.767 1 1 11.767 1 25s10.767 24 24 24 24-10.767 24-24S38.233 1 25 1zm0 46C12.869 47 3 37.131 3 25S12.869 3 25 3s22 9.869 22 22-9.869 22-22 22z" />
  </svg>
);

export default CircleIcon;
