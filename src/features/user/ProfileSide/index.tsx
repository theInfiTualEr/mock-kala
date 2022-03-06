import { Rings } from "react-loader-spinner";
import styled from "styled-components";
import AddressOption from "./AddressOption";
import AddAddress from "./AddAddress";
import { selectUser } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../values/colors";
import CustomSide from "../../../components/CustomSide";
import strings from "../../../values/strings";
import CustomButton from "../../../components/CustomButton";
import { useEffect } from "react";
import { fetchUser } from "../thunks";

const FullNameUserNameContainer = styled.div`
  display: flex;
`;

const SectionHeader = styled.h3`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: ${colors.accent};
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

const FullName = styled(Info)`
  margin-right: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 5%;
`;

const StyledCustomTextButton = styled(CustomButton)`
  margin-bottom: 15px;
  align-self: flex-end;
`;

const OrdersEmptyP = styled.p`
  text-align: center;
`;

const ProfileSide = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user === undefined) {
      dispatch(fetchUser());
    }
  }, [dispatch, user]);

  if (user === undefined)
    return (
      <CustomSide title="Profile">
        <Rings height="100" width="100" color="grey" ariaLabel="loading" />
      </CustomSide>
    );

  return (
    <CustomSide title="Profile">
      <Container>
        <FullNameUserNameContainer>
          <FullName>{user.name.firstname + " " + user.name.lastname}</FullName>
          <Info>@{user.username}</Info>
        </FullNameUserNameContainer>
        <Info>{user.email}</Info>
        <Info>{user.phone}</Info>
        <StyledCustomTextButton
          onClick={() => {}}
          isOutline={true}
          title={strings.profile.logoutButton}
        />
        <SectionHeader>{strings.profile.addresses}</SectionHeader>
        <ul>
          {user.addresses.map((address) => (
            <li key={address.id}>
              <AddressOption
                id={address.id}
                street={address.street}
                city={address.city}
              />
            </li>
          ))}
          <li>
            <AddAddress />
          </li>
        </ul>
        <SectionHeader>{strings.profile.prevOrders}</SectionHeader>
        <OrdersEmptyP>{strings.profile.orders.empty}</OrdersEmptyP>
      </Container>
    </CustomSide>
  );
};

export default ProfileSide;
