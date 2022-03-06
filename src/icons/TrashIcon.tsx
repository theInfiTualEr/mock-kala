import * as React from "react";

interface Props {
  height: number;
  width: number;
  fill: string;
}

const TrashIcon: React.FC<Props> = ({ height, width, fill }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    // height={48}
    // width={48}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z" />
    <path d="M0 0h48v48H0z" fill="none" />
  </svg>
);

export default TrashIcon;
