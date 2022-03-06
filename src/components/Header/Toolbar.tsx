import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RouteHistory from "../../features/routeHistory/RouteHistory";
import { selectRouteHistory } from "../../features/routeHistory/routeHistorySlice";
import { sideChanged } from "../../features/side/sideSlice";
import { ReactComponent as FilterSvg } from "../../icons/filter.svg";
import { ReactComponent as BackSvg } from "../../icons/back.svg";
import CustomIconButton from "../CustomIconButton";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5%;
  margin-top: 20px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
`;

const RightContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

const StyledRouteHistory = styled(RouteHistory)`
  margin-left: 2%;
`;

const routesWithFilter = ["Home", "Search"];

const Toolbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeHistory = useSelector(selectRouteHistory);
  const routeHistoryCurrent = routeHistory[routeHistory.length - 1];

  return (
    <Container>
      <LeftContainer>
        {routeHistory.length > 1 && (
          <CustomIconButton
            onClick={() => {
              navigate(-1);
            }}
            icon={<BackSvg width={15} height={15} fill="black" />}
          />
        )}
        <StyledRouteHistory />
      </LeftContainer>
      <RightContainer>
        {routesWithFilter.includes(routeHistoryCurrent) && (
          <CustomIconButton
            onClick={() => {
              dispatch(sideChanged("filter"));
            }}
            icon={<FilterSvg width={15} height={15} />}
          />
        )}
      </RightContainer>
    </Container>
  );
};

export default Toolbar;
