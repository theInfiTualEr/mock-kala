import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SideHeaderIcon from "../../icons/side-header.svg";
import { sideChanged } from "./sideSlice";

const MaskPage = styled(animated.div)`
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: black;
`;

const ContainerFramer = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
  left: auto;
  bottom: 0;
`;

const Container = styled(animated.aside)`
  overflow: scroll;
  position: relative;
  /* position: absolute;
  z-index: 2;
  right: 0;
  top: 0; */
  height: 100%;
  width: 400px;
  background-image: url(${SideHeaderIcon});
  background-repeat: no-repeat;
  background-color: white;
  height: 100vh;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
`;

interface Props {
  title: string;
}

const CustomSide: React.FC<Props> = ({ title, children }) => {
  const dispatch = useDispatch();

  const [shouldClose, setShouldClose] = useState(false);
  const sideStyles = useSpring({
    from: { right: shouldClose ? "0px" : "-400px" },
    to: { right: shouldClose ? "-400px" : "0px" },
    onRest: () => {
      if (shouldClose) {
        dispatch(sideChanged(null));
      }
    },
  });

  const maskStyles = useSpring({
    from: { opacity: shouldClose ? 0.5 : 0 },
    to: { opacity: shouldClose ? 0 : 0.5 },
  });

  function closeSide() {
    setShouldClose(true);
  }

  return (
    <>
      <MaskPage onClick={closeSide} style={{ opacity: maskStyles.opacity }} />
      <ContainerFramer>
        <Container style={{ right: sideStyles.right }}>
          <Title>{title}</Title>
          {children}
        </Container>
      </ContainerFramer>
    </>
  );
};

export default CustomSide;
