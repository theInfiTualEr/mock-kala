import styled from "styled-components";
import colors from "../values/colors";

const Input = styled.input`
  width: 30px;
  border-width: 1px;
  border-color: ${colors.primaryText};
  border-style: solid;
  padding: 10px 15px;
  border-radius: 8px;
  margin-right: 10px;
`;

interface Props {
  count: string;
  setCount: React.Dispatch<React.SetStateAction<string>>;
  onValidChange?: (value: number) => void;
}

const CountInput: React.FC<Props> = ({ count, setCount, onValidChange }) => {
  function countOnInput(e: React.ChangeEvent<HTMLInputElement>): void {
    if (!e.target.validity.valid) return;

    const value = parseInt(e.target.value);

    if (value > 0) setCount(e.target.value);

    if (onValidChange !== undefined) onValidChange(value);
  }

  return (
    <Input
      type="text"
      pattern="[0-9]*"
      onChange={(e) => {
        countOnInput(e);
      }}
      value={count}
    />
  );
};

export default CountInput;
