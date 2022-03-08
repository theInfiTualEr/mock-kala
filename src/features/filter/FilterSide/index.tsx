import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../../values/colors";
import CustomSide from "../../side/CustomSide";
import CustomButton from "../../../components/CustomButton";
import {
  filterOrderChanged,
  filterSortByChanged,
  selectFilter,
} from "../filterSlice";

const SectionHeader = styled.h3`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: ${colors.accent};
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 5%;
`;

const StyledCustomTextButton = styled(CustomButton)`
  margin: 15px 0;
`;

const FilterSide = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <CustomSide title="Profile">
      <Container>
        <SectionHeader>Order</SectionHeader>
        <Section>
          <StyledCustomTextButton
            onClick={() => {
              dispatch(
                filterOrderChanged(filter.order !== "asc" ? "asc" : null)
              );
            }}
            isOutline={filter.order !== "asc"}
            title="Ascending"
          />
          <StyledCustomTextButton
            onClick={() => {
              dispatch(
                filterOrderChanged(filter.order !== "dec" ? "dec" : null)
              );
            }}
            isOutline={filter.order !== "dec"}
            title="Decending"
          />
        </Section>
        <SectionHeader>Sort By</SectionHeader>
        <Section>
          <StyledCustomTextButton
            onClick={() => {
              dispatch(
                filterSortByChanged(filter.sortBy !== "price" ? "price" : null)
              );
            }}
            isOutline={filter.sortBy !== "price"}
            title="Price"
          />
          <StyledCustomTextButton
            onClick={() => {
              dispatch(
                filterSortByChanged(
                  filter.sortBy !== "popularity" ? "popularity" : null
                )
              );
            }}
            isOutline={filter.sortBy !== "popularity"}
            title="Popularity"
          />
          <StyledCustomTextButton
            onClick={() => {
              dispatch(
                filterSortByChanged(
                  filter.sortBy !== "rating" ? "rating" : null
                )
              );
            }}
            isOutline={filter.sortBy !== "rating"}
            title="Rating"
          />
        </Section>
        <SectionHeader>Price Limit</SectionHeader>
        <Section></Section>
      </Container>
    </CustomSide>
  );
};

export default FilterSide;
