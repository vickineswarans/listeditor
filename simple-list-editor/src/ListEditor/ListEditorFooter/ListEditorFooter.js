import React from "react";
import styled from "styled-components";
import Button from "../../presentational/common/Button/Button";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
StyledFooter.displayName = "StyledFooter";

const ListEditorFooter = () => {
  return (
    <StyledFooter>
      <Button name="Apply" buttonType="secondary" />
    </StyledFooter>
  );
};

export default ListEditorFooter;
