import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CustomButton from "../../../../components/CustomButton";
import colors from "../../../../values/colors";
import strings from "../../../../values/strings";
import { addressAdded } from "../../userSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LabelP = styled.p`
  margin-bottom: 4px;
`;

const Input = styled.input`
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid ${colors.accent};
  height: 40px;
`;

const StyledCustomButton = styled(CustomButton)`
  margin-right: 10px;
`;

type Props = {
  toggleForm: () => void;
};

const AddAddressForm: React.FC<Props> = ({ toggleForm }) => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  function inputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    switch (e.target.name) {
      case "street":
        setStreet(value);
        break;
      case "city":
        setCity(value);
    }
  }

  function addOnPress() {
    if (city.trim() === "" || street.trim() === "") {
      return;
    }

    const cityValue = city;
    const streetValue = street;

    setCity("");
    setStreet("");

    dispatch(addressAdded(cityValue, streetValue));

    toggleForm();
  }

  function cancelOnPress() {
    setCity("");
    setStreet("");

    toggleForm();
  }

  return (
    <Container>
      <Label>
        <LabelP>{strings.profile.addNewAddress.street}</LabelP>
        <Input
          type="text"
          name="street"
          value={street}
          onChange={inputOnChange}
        />
      </Label>
      <Label>
        <LabelP>{strings.profile.addNewAddress.city}</LabelP>
        <Input type="text" name="city" value={city} onChange={inputOnChange} />
      </Label>
      <ButtonsContainer>
        <StyledCustomButton
          onClick={cancelOnPress}
          isOutline={true}
          title={strings.profile.addNewAddress.cancelButton}
        />
        <CustomButton
          onClick={addOnPress}
          isOutline={false}
          title={strings.profile.addNewAddress.addButton}
        />
      </ButtonsContainer>
    </Container>
  );
};

export default AddAddressForm;
