import { useState } from "react";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../../icons/SearchIcon";
import colors from "../../values/colors";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 10px;
`;

const SearchBox = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const paramName = searchParams.get("name");
  const urlSearchQuery = paramName === null ? "" : paramName;

  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);

  return (
    <Container>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Link
        to={`/search/?${createSearchParams({ name: searchQuery }).toString()}`}
      >
        <SearchIcon width={24} height={24} strokeColor={colors.primaryText} />
      </Link>
    </Container>
  );
};

export default SearchBox;
