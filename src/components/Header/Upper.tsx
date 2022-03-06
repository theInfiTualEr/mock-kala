import strings from "../../values/strings";
import styled from "styled-components";
import colors from "../../values/colors";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sideChanged } from "../../features/side/sideSlice";

const Container = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  border-bottom: 1px;
  border-color: ${colors.accent};
  border-style: solid;
`;

const LeftContainer = styled.div`
  border-right: 1px;
  border-color: ${colors.accent};
  border-style: solid;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 3;
  padding: 0 10px;
`;

const RightContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Upper = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <LeftContainer>
        <h1>{strings.title}</h1>
      </LeftContainer>
      <MiddleContainer>
        <h2>new road, kilcoole</h2>
        <nav>
          <List>
            <Link to="/">
              <ListItem>{strings.nav.home}</ListItem>
            </Link>
            <ListItem onClick={() => dispatch(sideChanged("contact"))}>
              {strings.nav.contact}
            </ListItem>
          </List>
        </nav>
      </MiddleContainer>
      <RightContainer>
        <h2>{strings.header.phoneNum}</h2>
      </RightContainer>
    </Container>
  );
};

export default Upper;
