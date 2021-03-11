import styled from 'styled-components';
import colors from '../../tokens/colors';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const ContainerTitle = styled.div`
  text-align: center;

  p {
    font-size: 20px;

    strong {
      color: ${colors.primary};
    }
  }
`;

export const ContainerList = styled.div`
  margin-top: 40px;
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  padding: 10px 20px;

  p {
    margin-bottom: 10px;

    strong {
      color: ${colors.primary};
    }
  }
`;
