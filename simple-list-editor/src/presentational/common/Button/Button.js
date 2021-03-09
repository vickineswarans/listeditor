import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  color: white;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  cursor: pointer;

  ${({ buttonType, theme }) =>
    buttonType === "primary" &&
    css`
      background-color: #32a6d1;
      border: 1px solid #625151;

      &:hover {
        background-color: #1e789a;
      }

      &:disabled {
        background-color: #6a6a6a;
        color: ${theme.colors.silverChalice};
        cursor: default;

        &:hover {
          background-color: #6a6a6a;
          color: ${theme.colors.silverChalice};
        }
      }
    `}

  ${({ buttonType, theme }) =>
    buttonType === "secondary" &&
    css`
      background-color: ${theme.colors.mineShaft};
      border: 1px solid white;
      padding: 10px 20px;

      &:hover {
        background-color: white;
        color: black;
      }
    `}
`;

const Button = (props) => {
  const { name, buttonType, handleClick, disable } = props;

  return (
    <StyledButton
      buttonType={buttonType}
      onClick={handleClick}
      type="button"
      disabled={disable}
    >
      {name}
    </StyledButton>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  handleClick: PropTypes.func,
  disable: PropTypes.bool,
};

export default Button;
