import styled from "styled-components";
import SearchBar from "./SearchBar";

const SearchBarStyled = styled(SearchBar)`
  height: 10vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  text-align: justify;

  > input {
    :focus {
      background-color: #fafafa;
    }

    :hover {
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
    }

    transition: 0.25s;
    outline: 0;
    padding: 7px 15px;
    margin: 5px;
    width: 100%;
    height: 30px;
    border: 1px solid #f5f5f5;
  }
`;

export default SearchBarStyled;
