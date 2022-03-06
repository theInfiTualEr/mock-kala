import * as React from "react";

interface Props {
  height: number;
  width: number;
  fill: string;
}

const UserIcon: React.FC<Props> = ({ height, width, fill }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    // height={24}
    // width={24}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle
      cx={12}
      cy={7}
      fill="none"
      r={4}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default UserIcon;
