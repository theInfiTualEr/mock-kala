import styled from "styled-components";
import colors from "../values/colors";

// TODO hover
const Container = styled.button`
  border: 1px;
  border-color: ${colors.accent};
  border-style: solid;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 35px;
  height: 35px;
`;

interface Props {
  style?: React.CSSProperties;
  icon: React.ReactNode;
  onClick: () => void;
}

const CustomIconButton: React.FC<Props> = ({ style, icon, onClick }) => {
  return (
    <Container onClick={onClick} style={style}>
      {icon}
    </Container>
  );
};

export default CustomIconButton;
