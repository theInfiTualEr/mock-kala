import styled from "styled-components";
import PlusIcon from "../../../../icons/PlusIcon";
import colors from "../../../../values/colors";
import strings from "../../../../values/strings";

const Button = styled.button`
  height: 40px;
  margin-right: 10px;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

type Props = {
  toggleForm: () => void;
};

const AddAddressOption: React.FC<Props> = ({ toggleForm }) => {
  return (
    <>
      <Button onClick={toggleForm}>
        <PlusIcon width={20} height={20} fill={colors.primaryText} />
      </Button>
      <p>{strings.profile.addNewAddress.optionButton}</p>
    </>
  );
};

export default AddAddressOption;
