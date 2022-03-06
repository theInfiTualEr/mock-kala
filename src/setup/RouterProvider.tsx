import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  routePopped,
  routePushed,
  routeReplaced,
} from "../features/routeHistory/routeHistorySlice";

const history = createBrowserHistory({ window });

const RouterProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(routePushed(window.location.pathname));
  }, [dispatch]);

  useEffect(() => {
    history.listen(({ location, action }) => {
      switch (action) {
        case "POP":
          dispatch(routePopped());
          break;
        case "PUSH":
          dispatch(routePushed(location.pathname));
          break;
        case "REPLACE":
          dispatch(routeReplaced(location.pathname));
          break;
      }
    });
  }, [dispatch]);

  return <HistoryRouter history={history}>{children}</HistoryRouter>;
};

export default RouterProvider;
