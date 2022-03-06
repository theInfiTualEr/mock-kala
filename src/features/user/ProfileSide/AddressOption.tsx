import { useDispatch } from "react-redux";
import styled from "styled-components";
import CircleIcon from "../../../icons/CircleIcon";
import TrashIcon from "../../../icons/TrashIcon";
import colors from "../../../values/colors";
import { addressRemoved } from "../userSlice";

type Props = {
  id: string;
  city: string;
  street: string;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const AddressText = styled.p`
  flex-grow: 1;
  padding: 0 25px;
`;

const AddressOption: React.FC<Props> = ({ id, city, street }) => {
  const address = street + ", " + city;

  const dispatch = useDispatch();

  function trashOnClick() {
    dispatch(addressRemoved(id));
  }

  return (
    <Container>
      <CircleIcon width={20} height={20} fill={colors.primaryText} />
      <AddressText>{address}</AddressText>
      <Button onClick={trashOnClick}>
        <TrashIcon width={20} height={20} fill={colors.primaryText} />
      </Button>
    </Container>
  );
};

export default AddressOption;
