import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {
  CategoryListWrap,
  CategoryLabel,
  Category,
} from './CategoryList.style';

import { CategoryProps, CategoryItemProps } from 'typings/index';

function CategoryList() {
  const { categoryList } = useStaticQuery<CategoryProps>(
    graphql`
      query {
        categoryList: allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  );

  const categories = categoryList.group;

  const total = categories
    .map(category => category.totalCount)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <CategoryListWrap>
      <CategoryLabel>Category</CategoryLabel>
      <Category key="ALL" to="/">
        <span>ALL</span>
        {total}
      </Category>
      {categories.map((category: CategoryItemProps) => (
        <Category
          key={category.fieldValue}
          to={`/${category.fieldValue.toLowerCase()}`}
        >
          <span>{category.fieldValue}</span>
          {category.totalCount}
        </Category>
      ))}
    </CategoryListWrap>
  );
}

export default CategoryList;
