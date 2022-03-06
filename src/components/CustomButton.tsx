import styled from "styled-components";
import colors from "../values/colors";

type Props = {
  className?: string;
  title: string;
  isOutline: boolean;
  onClick: () => void;
};

// TODO hover
const BasicButton = styled.button`
  border: 1px;
  font-weight: bold;
  border-style: solid;
  cursor: pointer;
  border-radius: 6px;
  min-width: 90px;
  height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

type ColoredButtonProps = {
  isOutline: boolean;
};

const ColoredButton = styled(BasicButton)<ColoredButtonProps>`
  border-color: ${colors.primaryText};
  color: ${(props) => (props.isOutline ? colors.primaryText : `#fff`)};
  background-color: ${(props) =>
    props.isOutline ? `transparent` : colors.primaryText};
`;

const CustomButton: React.FC<Props> = ({
  className,
  title,
  isOutline,
  onClick,
}) => {
  return (
    <ColoredButton
      onClick={onClick}
      isOutline={isOutline}
      className={className}
    >
      {title}
    </ColoredButton>
  );
};

export default CustomButton;
