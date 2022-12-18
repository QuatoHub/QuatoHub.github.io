import styled from '@emotion/styled';

export const SelectedCategoryWrap = styled.div`
  margin: 6rem 0;
  text-align: center;
  cursor: default;
`;

export const Category = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary10};
`;

export const Count = styled.p`
  margin: 3rem 0 0;
  font-size: 1.8rem;
  font-weight: 400;
`;
