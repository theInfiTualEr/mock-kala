import * as React from "react";

interface Props {
  height: number;
  width: number;
  strokeColor: string;
}

const SearchIcon: React.FC<Props> = ({ height, width, strokeColor }) => (
  <svg
    fill="none"
    height={height}
    stroke={strokeColor}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    width={width}
    // height={24}
    // width={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={11} cy={11} r={8} />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export default SearchIcon;
