import styled from "styled-components";
import colors from "../values/colors";

// TODO hover
const Button = styled.button`
  border: 1px;
  border-color: ${colors.accent};
  border-style: solid;
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  min-width: 90px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

interface Props {
  icon: React.ReactNode;
  title: string;
}

const CustomIconTextButton: React.FC<Props> = ({ icon, title }) => {
  return (
    <Button>
      {icon}
      <p>{title}</p>
    </Button>
  );
};

export default CustomIconTextButton;
