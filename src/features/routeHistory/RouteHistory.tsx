import { Dictionary } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectAllProductEntities } from "../products/productsSlice";
import Product from "../products/types/Product";
import { selectRouteHistory } from "./routeHistorySlice";

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  white-space: pre;
`;

function renderRouteHistory(
  routeHistory: string[],
  productEntities: Dictionary<Product>
): JSX.Element[] {
  const elements: JSX.Element[] = [];

  for (let i = 0; i < routeHistory.length; i++) {
    let route = routeHistory[i];

    if (routeHistory[i - 1] === "Product") {
      const product = productEntities[routeHistory[i]];
      if (product !== undefined) route = product.title;
    }

    if (i !== routeHistory.length - 1) route += " - ";

    const element = <Item key={i}>{route}</Item>;
    elements.push(element);
  }

  return elements;
}

type Props = {
  className?: string;
};

const RouteHistory: React.FC<Props> = ({ className }) => {
  const routeHistory = useSelector(selectRouteHistory);
  const productEntities = useSelector(selectAllProductEntities);

  const memoizedCallback = useCallback(
    () => renderRouteHistory(routeHistory, productEntities),
    [routeHistory, productEntities]
  );

  return <List className={className}>{memoizedCallback()}</List>;
};

export default RouteHistory;
