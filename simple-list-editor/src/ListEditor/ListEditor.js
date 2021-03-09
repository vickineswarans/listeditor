import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledContainer = styled.div`
  width: 800px;
  background-color: ${(props) => `${props.theme.colors.mineShaft}`};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ListEditor = (props) => {
  const { HeaderTitle, options, optionsLabel } = props;

  return <StyledContainer></StyledContainer>;
};

ListEditor.propTypes = {
  HeaderTitle: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  optionsLabel: PropTypes.string.isRequired,
};

export default ListEditor;
