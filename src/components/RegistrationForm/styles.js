import styled from 'styled-components';

export const TextError = styled.p`
  color: ${(props) => (props.error && 'red') || (props.success && 'green')};
`;
