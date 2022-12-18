import styled from '@emotion/styled';

export const ContactWrap = styled.ul`
  display: flex;
  padding: 4rem 0 0;
  align-items: center;
  justify-content: center;
`;

export const ContactIcon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.5rem;
  width: 5rem;
  height: 5rem;
  margin: 0 0 0 2rem;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.lightgray05};
  }

  svg {
    width: 2.8rem;
    height: 2.8rem;
    fill: ${props => props.theme.colors.text10};
  }

  :nth-of-type(1) {
    margin: 0;
  }
`;
