import styled from 'styled-components';
import colors from '../../tokens/colors';

export const ContainerRedirect = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 10px;

    a {
      display: inline-block;
      color: ${colors.primary};
      text-decoration: none;
      font-weight: 500;

      &::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${colors.primary};
        transition: width 0.2s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;
