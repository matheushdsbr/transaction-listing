import styled from 'styled-components';

export const Container = styled.div``;

export const TextError = styled.p`
  color: ${(props) => (props.error && 'red') || (props.success && 'green')};
`;
