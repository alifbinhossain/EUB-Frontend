import React from 'react';

import type {
  PerformanceEvaluation,
  ProgramDetails,
} from '../../_config/curriculum';
import { PerformanceEvaluationSection } from './performance-evaluation-section';

interface ProgramDetailsSectionProps {
  semesterInfo: {
    spring: string;
    summer: string;
    fall: string;
  };
  programDetails: ProgramDetails;
  performanceEvaluation: PerformanceEvaluation[];
}

export const ProgramDetailsSection = React.memo<ProgramDetailsSectionProps>(
  ({ semesterInfo, programDetails, performanceEvaluation }) => {
    return (
      <div className='space-y-6'>
        {/* Semesters */}
        <div>
          <h4 className='mb-2 font-semibold'>Semesters:</h4>
          <div className='ml-4 space-y-1'>
            <p>
              <strong>Spring:</strong> {semesterInfo.spring}
            </p>
            <p>
              <strong>Summer:</strong> {semesterInfo.summer}
            </p>
            <p>
              <strong>Fall:</strong> {semesterInfo.fall}
            </p>
          </div>
        </div>

        {/* Duration */}
        <div>
          <h4 className='mb-2 font-semibold'>Duration:</h4>
          <div className='ml-4 space-y-1'>
            <p>
              <strong>Year:</strong> {programDetails.duration.years}
            </p>
            <p>
              <strong>Semester:</strong> {programDetails.duration.semesters}
            </p>
          </div>
        </div>

        {/* Credit Hour */}
        <div>
          <h4 className='mb-2 font-semibold'>Credit Hour:</h4>
          <p className='ml-4'>{programDetails.creditHours}</p>
        </div>

        {/* Course Load */}
        <div>
          <h4 className='mb-2 font-semibold'>Course Load:</h4>
          <p className='ml-4'>{programDetails.courseLoad}</p>
          <p className='ml-8'>{programDetails.courseLoadDetails}</p>
        </div>

        {/* Performance Evaluation */}
        <PerformanceEvaluationSection evaluations={performanceEvaluation} />

        {/* Tuition Fee Structure */}
        {/* <div>
          <h4 className='mb-2 font-semibold'>2.1.6. Tuition Fee Structure:</h4>
        </div> */}
      </div>
    );
  }
);

ProgramDetailsSection.displayName = 'ProgramDetailsSection';
