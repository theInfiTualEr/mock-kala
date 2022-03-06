import { useState } from "react";
import styled from "styled-components";
import AddAddressForm from "./AddAddressForm";
import AddAddressOption from "./AddAddressOption";

type Props = {};

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  align-items: center;
`;

const AddAddress: React.FC<Props> = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  function toggleForm() {
    setShowForm((prevShowForm) => !prevShowForm);
  }

  return (
    <Container>
      {showForm ? (
        <AddAddressForm toggleForm={toggleForm} />
      ) : (
        <AddAddressOption toggleForm={toggleForm} />
      )}
    </Container>
  );
};

export default AddAddress;
