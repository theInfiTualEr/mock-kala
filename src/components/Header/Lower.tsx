import strings from "../../values/strings";
import styled from "styled-components";
import colors from "../../values/colors";
import CustomIconButton from "../CustomIconButton";
import CartIcon from "../../icons/CartIcon";
import FavIcon from "../../icons/FavIcon";
import UserIcon from "../../icons/UserIcon";
import CustomIconTextButton from "../CustomIconTextButton";
import CatalogIcon from "../../icons/CatalogIcon";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sideChanged } from "../../features/side/sideSlice";
import SearchBox from "./SearchBox";

const Container = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  border-bottom: 1px;
  border-color: ${colors.accent};
  border-style: solid;
`;

const LeftContainer = styled.div`
  border-right: 1px;
  border-color: ${colors.accent};
  border-style: solid;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 3;
  padding: 0 10px;
`;

const RightContainer = styled.div`
  border-left: 1px;
  border-color: ${colors.accent};
  border-style: solid;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
`;

const UserContainer = styled.div`
  display: flex;
`;

const UserInfoContainer = styled.div``;

const BalanceH4 = styled.h4`
  color: ${colors.accentText};
`;

const Lower = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <LeftContainer>
        <Link to="/catalog">
          <CustomIconTextButton
            icon={
              <CatalogIcon width={15} height={15} fill={colors.primaryText} />
            }
            title={strings.header.catalog}
          />
        </Link>
      </LeftContainer>

      <MiddleContainer>
        <SearchBox />
      </MiddleContainer>

      <RightContainer>
        <CustomIconButton
          onClick={() => {
            dispatch(sideChanged("cart"));
          }}
          style={{ marginRight: "5px", marginLeft: "10px" }}
          icon={<CartIcon width={15} height={15} fill={colors.primaryText} />}
        />
        <CustomIconButton
          onClick={() => {
            navigate("/favorites");
          }}
          style={{ marginRight: "10px", marginLeft: "5px" }}
          icon={<FavIcon width={15} height={15} fill={colors.primaryText} />}
        />
        <UserContainer>
          <CustomIconButton
            onClick={() => {
              dispatch(sideChanged("profile"));
            }}
            style={{ marginRight: "10px" }}
            icon={<UserIcon width={15} height={15} fill={colors.primaryText} />}
          />
          <UserInfoContainer>
            <h4>John</h4>
            <BalanceH4>{strings.header.balance} 25$</BalanceH4>
          </UserInfoContainer>
        </UserContainer>
      </RightContainer>
    </Container>
  );
};

export default Lower;
