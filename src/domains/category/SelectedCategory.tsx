import React from 'react';

import {
  SelectedCategoryWrap,
  Category,
  Count,
} from './SelectedCategory.style';

function SelectedCategory({
  category,
  count,
}: {
  category: string;
  count: number;
}) {
  return (
    <SelectedCategoryWrap>
      <Category>{category}</Category>
      <Count>총 {count}개의 포스팅</Count>
    </SelectedCategoryWrap>
  );
}

export default SelectedCategory;
