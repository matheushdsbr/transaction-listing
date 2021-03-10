import styled from 'styled-components';
import colors from '../../tokens/colors';

export const TextError = styled.p`
  color: ${(props) =>
    (props.error && colors.negative) || (props.success && colors.sucess)};
`;
