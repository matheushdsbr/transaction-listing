import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;

  input {
    border-radius: 12px;
    border: 1px solid blue;
    color: #454550;
    height: 12px;
    outline: none;
    padding: 18px;
    transition: all 0.2s ease-out;
    width: 100%;

    &:focus {
      border: 1px solid green;
    }

    &:focus ~ label,
    &:valid ~ label {
      color: green;
      padding: 0px 8px;
      top: -20px;
    }
  }

  label {
    background: white;
    border-radius: 12px;
    color: blue;
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
