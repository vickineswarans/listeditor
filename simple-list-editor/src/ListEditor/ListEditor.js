import React, { useState } from "react";
import styled from "styled-components";
import ListEditorHeader from "./ListEditorHeader/ListEditorHeader";
import ListEditorFooter from "./ListEditorFooter/ListEditorFooter";
import List from "../presentational/common/List/List";
import Button from "../presentational/common/Button/Button";
import { removeItemFromArray } from "../../utils/utils";
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

const StyledSection = styled.section`
  display: flex;
  margin: 20px 0px;
  align-items: center;
  justify-content: space-between;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
StyledButtonsWrapper.displayName = "StyledButtonsWrapper";

const ListEditor = (props) => {
  const { HeaderTitle, options, optionsLabel } = props;
  const [availableFields, setAvailableFields] = useState([...options]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [availableField, setAvailableField] = useState(null);
  const [selectedField, setSelectedField] = useState(null);

  const handleUseClick = () => {
    setAvailableFields(removeItemFromArray(availableFields, availableField));
    setSelectedFields([...selectedFields, availableField]);
    setAvailableField(null);
  };

  const handleRemoveClick = () => {
    setSelectedFields(removeItemFromArray(selectedFields, selectedField));
    setAvailableFields([...availableFields, selectedField]);
    setSelectedField(null);
  };

  const handleListEvent = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <StyledContainer>
      <ListEditorHeader headerTitle={HeaderTitle} />
      <StyledSection>
        <List
          labelName={optionsLabel}
          options={availableFields}
          name="availableFields"
          handleChange={(e) => handleListEvent(e, setAvailableField)}
          handleClick={(e) => handleListEvent(e, setAvailableField)}
        />
        <StyledButtonsWrapper>
          <Button
            name="> Use"
            buttonType="primary"
            disable={availableField === null}
            handleClick={handleUseClick}
          />
          <br />
          <Button
            name="< Remove"
            buttonType="primary"
            disable={selectedField === null}
            handleClick={handleRemoveClick}
          />
        </StyledButtonsWrapper>
        <List
          labelName="Selected Fields"
          options={selectedFields}
          name="selectedFields"
          handleChange={(e) => handleListEvent(e, setSelectedField)}
          handleClick={(e) => handleListEvent(e, setSelectedField)}
        />
      </StyledSection>
      <ListEditorFooter />
    </StyledContainer>
  );
};

ListEditor.propTypes = {
  HeaderTitle: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  optionsLabel: PropTypes.string.isRequired,
};

export default ListEditor;
