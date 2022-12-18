import React from 'react';

import { StResume } from './Resume.style';

function Resume({ resume }: { resume: string }) {
  return <StResume dangerouslySetInnerHTML={{ __html: resume }} />;
}

export default Resume;
