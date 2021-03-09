import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledSelect = styled.select`
  ${({ theme }) => css`
    width: 170px;
    background-color: ${theme.colors.tundora};
    color: ${theme.colors.white};
    outline: none;
    cursor: pointer;
    border: none;
    font-size: 13px;

    &::-webkit-scrollbar {
      width: 13px;
    }

    &::-webkit-scrollbar-button:vertical {
      background-color: ${theme.colors.tundora};
      display: block;
      border-style: solid;
    }

    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      display: block;
    }

    &::-webkit-scrollbar-button:vertical:start:increment,
    &::-webkit-scrollbar-button:vertical:end:decrement {
      display: none;
    }

    &::-webkit-scrollbar-button:vertical:increment {
      border-width: 12px 7px 0 7px;
      border-color: ${theme.colors.silverChalice} transparent transparent
        transparent;
    }

    &::-webkit-scrollbar-button:vertical:decrement {
      border-width: 0 7px 12px 7px;
      border-color: transparent transparent ${theme.colors.silverChalice}
        transparent;
    }

    &::-webkit-scrollbar-track-piece:vertical:start {
      border: 6px solid ${theme.colors.tundora};
      border-top: 0px;
    }

    &::-webkit-scrollbar-track-piece:vertical:end {
      border: 6px solid ${theme.colors.tundora};
      border-bottom: 0px;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: #b6b6b6;
    }

    &::-webkit-scrollbar-thumb:vertical {
      background-color: ${theme.colors.silverChalice};
    }
  `}
`;

const StyledSelectContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => `${props.theme.colors.tundora}`};
`;

const StyledLabel = styled.label`
  align-items: flex-start;
  display: block;
  margin-bottom: 10px;
`;

const StyledOption = styled.option`
  &:hover {
    background-color: ${(props) => `${props.theme.colors.scorpion}`};
  }
`;

const List = (props) => {
  const { labelName, options, name, handleChange, handleClick } = props;

  return (
    <div>
      <StyledLabel htmlFor={name}>{labelName}</StyledLabel>
      <StyledSelectContainer>
        <StyledSelect
          name={name}
          onClick={handleClick}
          onChange={handleChange}
          size="11"
        >
          {options &&
            options.map((option, index) => (
              <StyledOption key={index} value={option}>
                {option}
              </StyledOption>
            ))}
        </StyledSelect>
      </StyledSelectContainer>
    </div>
  );
};

List.propTypes = {
  labelName: PropTypes.string.isRequired,
  options: PropTypes.array,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default List;
