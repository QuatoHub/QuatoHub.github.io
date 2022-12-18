import React from 'react';

import {
  ContentTitle,
  ContentDetails,
  ContentDate,
  ContentCategory,
  Line,
} from './Description.style';

import { DescriptionProps } from 'typings/index';

function DescriptionData({ title, date, category, time }: DescriptionProps) {
  return (
    <>
      <ContentTitle>{title}</ContentTitle>
      <ContentDetails>
        <ContentDate>
          {date} &middot; {time} min read
        </ContentDate>
        <ContentCategory to={`/${category.toLowerCase()}`}>
          {category}
        </ContentCategory>
      </ContentDetails>
      <Line />
    </>
  );
}

export default DescriptionData;
