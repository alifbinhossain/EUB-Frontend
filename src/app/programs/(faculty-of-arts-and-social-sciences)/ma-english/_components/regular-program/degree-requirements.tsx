import React from 'react';

import Title from '@/components/title';

import ContentWrapper from '../content-wrapper';

const DegreeRequirements = () => {
  return (
    <ContentWrapper title='Degree Requirements' className='space-y-6'>
      <p>
        To successfully complete the program, students must complete 136
        credits, comprising 45 courses (133 credits) and 1 internship/project (3
        credits).
      </p>

      <div>
        <Title variant={'title'} title='Minimum GPA to pass program' />
        <p>
          Students must pass all courses individually and maintain a minimum
          Cumulative Grade Point Average (CGPA) of 2.25.
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Supplementary rules & cost' />
        <p>(Refer to the Office of the Controller of Examination, EUB)</p>
      </div>
      <div>
        <Title variant={'title'} title='Total Credits of Course' />
        <p>(136 credits)</p>
      </div>
      <div>
        <Title variant={'title'} title='Waivers' />
        <p>
          (Not applicable; refer to the credit transfer guidelines for credit
          transfer)
        </p>
      </div>
      <div>
        <Title variant={'title'} title='Mandatory completions' />
        <p>
          Students must complete a 3-credit internship/project to fulfill the
          program requirements.
        </p>
      </div>
    </ContentWrapper>
  );
};

export default DegreeRequirements;
