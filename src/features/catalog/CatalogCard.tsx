import styled from "styled-components";
import colors from "../../values/colors";

interface Props {
  id: string;
  title: string;
  picture: string;
}

const Container = styled.div`
  background-color: white;
  width: 250px;
  height: 400px;
  padding: 35px 25px;
  border-radius: 12px;
  border: 1px;
  border-style: solid;
  border-color: ${colors.accent};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 20px;
`;

const CardHeader = styled.div`
  flex-basis: 45px;
  width: 100%;
  max-width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
`;

const TitleP = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Img = styled.img`
  flex-grow: 1;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  /* max-width: 200px;
  max-height: 300px; */
`;

const CatalogCard: React.FC<Props> = ({ id, title, picture }) => {
  return (
    <Container>
      <CardHeader>
        <TitleP>{title}</TitleP>
      </CardHeader>
      <Img src={picture} alt={title} />
    </Container>
  );
};

export default CatalogCard;
