import styled from "styled-components";
import colors from "../../../values/colors";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-color: ${colors.accent};
  border-style: solid;
  border-radius: 8px;
`;

const P = styled.p`
  margin-bottom: 5px;
`;

type Props = {
  label: string;
};

const CustomFormInput: React.FC<Props> = ({ label }) => {
  return (
    <Label>
      <P>{label}</P>
      <Input type="text" />
    </Label>
  );
};

export default CustomFormInput;
