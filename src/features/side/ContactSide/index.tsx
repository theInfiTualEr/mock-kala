import styled from "styled-components";
import CustomButton from "../../../components/CustomButton";
import CustomSide from "../CustomSide";
import CustomFormInput from "./CustomFormInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 5%;
`;

const StyledCustomButton = styled(CustomButton)`
  margin-top: 10px;
  width: 100%;
  max-width: 150px;
  align-self: flex-end;
`;

// TODO empty form on send
// TODO show dialog on send

const ContactSide = () => {
  return (
    <CustomSide title="Contact">
      <Container>
        <CustomFormInput label="Name" />
        <CustomFormInput label="Email" />
        <CustomFormInput label="Message" />
        <StyledCustomButton onClick={() => {}} isOutline={false} title="Send" />
      </Container>
    </CustomSide>
  );
};

export default ContactSide;
