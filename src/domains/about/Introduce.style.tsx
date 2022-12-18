import styled from '@emotion/styled';
import { customMQ } from 'styles/theme';

export const IntroWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 0;

  ${customMQ} {
    flex-direction: column;
    text-align: center;
  }
`;

export const Intro = styled.div`
  margin: 0 3rem 0 0;

  ${customMQ} {
    margin: 0 0 3rem 0;
  }
`;

export const Greet = styled.p`
  font-size: 2.8rem;
`;

export const Info = styled.p`
  font-size: 4rem;
  font-weight: 700;
  line-height: 150%;
`;

export const Name = styled.span`
  color: ${props => props.theme.colors.primary10};
`;
