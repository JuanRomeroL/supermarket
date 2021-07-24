import styled from "styled-components";
import Error from "./Error";

const ErrorStyled = styled(Error)`
  background-color: #fdfdfd;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 20px;
  height: fit-content;

  > p {
    margin: 2px;
  }

  > .error {
    color: #6e0021;
  }
`;

export default ErrorStyled;
