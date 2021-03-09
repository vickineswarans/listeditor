import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: ${(props) => `1px solid ${props.theme.colors.gray}`};
`;

const StyledH1 = styled.h1`
  font-size: 25px;
`;

StyledH1.displayName = "StyledH1";

const ListEditorHeader = ({ headerTitle }) => {
  return (
    <StyledHeader>
      <StyledH1>{headerTitle}</StyledH1>
    </StyledHeader>
  );
};

export default ListEditorHeader;
