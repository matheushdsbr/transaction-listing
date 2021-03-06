import styled from 'styled-components';
import colors from '../../tokens/colors';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  input {
    border-radius: 12px;
    border: 1px solid
      ${(props) => (props.error ? colors.negative : colors.primary)};
    color: #454550;
    height: 12px;
    outline: none;
    padding: 18px;
    transition: all 0.2s ease-out;
    width: 100%;
    ${(props) => props.search && 'position: relative; padding-right: 60px;'}

    &:focus {
      border: 1px solid
        ${(props) => (props.error ? colors.negative : colors.primary)};
    }

    &:focus ~ label,
    &:valid ~ label {
      color: ${(props) => (props.error ? colors.negative : colors.primary)};
      padding: 0px 8px;
      top: -20px;
    }
  }

  label {
    background: white;
    border-radius: 12px;
    color: ${(props) => (props.error ? colors.negative : colors.primary)};
    cursor: text;
    left: 0;
    margin-left: 15px;
    margin-top: 7px;
    padding: 0px 8px;
    position: absolute;
    top: 0;
    transition: all 0.2s ease-out;
  }
`;
