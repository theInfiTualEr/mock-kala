import * as React from "react";

interface Props {
  height: number;
  width: number;
  fill: string;
}

const CatalogIcon: React.FC<Props> = ({ height, width, fill }) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 192 192"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M88 0H4C1.79 0 0 1.79 0 4v84c0 2.21 1.79 4 4 4h84c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zm-4 84H8V8h76v76zM88 100H4c-2.21 0-4 1.79-4 4v84c0 2.21 1.79 4 4 4h84c2.21 0 4-1.79 4-4v-84c0-2.21-1.79-4-4-4zm-4 84H8v-76h76v76zM188 100h-84c-2.21 0-4 1.79-4 4v84c0 2.21 1.79 4 4 4h84c2.21 0 4-1.79 4-4v-84c0-2.21-1.79-4-4-4zm-4 84h-76v-76h76v76zM188 0h-84c-2.21 0-4 1.79-4 4v84c0 2.21 1.79 4 4 4h84c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zm-4 84h-76V8h76v76z" />
  </svg>
);

export default CatalogIcon;
