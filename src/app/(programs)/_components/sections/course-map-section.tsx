'use client';

import React, { useMemo } from 'react';

import FullScreenImage from '@/components/fullscreen-image';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { cn } from '@/lib/utils';

import { Semester } from '../../_config/curriculum';

interface CourseMapSectionProps {
  title?: string;
  semesterData: Semester[];
  backgroundStudents?: string;
  referenceImage?: string;
  disabledTitle?: boolean;
  showTotal?: boolean;
  showTitle?: boolean;
}

export const CourseMapSection = React.memo<CourseMapSectionProps>(
  ({
    semesterData,
    backgroundStudents,
    title,
    referenceImage,
    disabledTitle = false,
    showTotal = true,
    showTitle = true,
  }) => {
    const grandTotal = useMemo(
      () => semesterData.reduce((sum, semester) => sum + semester.total, 0),
      [semesterData]
    );

    const getYearOrdinal = (year: number) => {
      switch (year) {
        case 1:
          return '1st';
        case 2:
          return '2nd';
        case 3:
          return '3rd';
        case 4:
          return '4th';
        default:
          return `${year}th`;
      }
    };

    const groupedByYear = useMemo(() => {
      const grouped = semesterData.reduce(
        (acc, semester) => {
          if (!acc[semester.year]) {
            acc[semester.year] = [];
          }
          acc[semester.year].push(semester);
          return acc;
        },
        {} as Record<number, typeof semesterData>
      );

      // Sort semesters within each year
      Object.keys(grouped).forEach((year) => {
        grouped[Number.parseInt(year)].sort((a, b) => a.semester - b.semester);
      });

      return grouped;
    }, [semesterData]);

    return (
      <div>
        {disabledTitle ? null : (
          <h3 className='mb-6 text-center text-lg font-semibold'>
            {title ? (
              title
            ) : (
              <>
                Semester Wise Distribution of Courses (
                {backgroundStudents || 'For H.S.C. Background Students'})
              </>
            )}
          </h3>
        )}

        <div className='space-y-8'>
          {Object.entries(groupedByYear)
            .sort(([a], [b]) => Number.parseInt(a) - Number.parseInt(b))
            .map(([year, semesters]) => {
              const yearTotal = semesters.reduce(
                (sum, semester) => sum + semester.total,
                0
              );

              return (
                <div key={year} className='mb-8'>
                  {showTitle && (
                    <h4 className='mb-4 font-semibold'>
                      {getYearOrdinal(Number.parseInt(year))} Year ({yearTotal}{' '}
                      Credits)
                    </h4>
                  )}

                  <div className='overflow-hidden border'>
                    <Table>
                      <TableHeader>
                        <TableRow className='bg-primary hover:bg-primary'>
                          <TableHead className='w-32 border-r text-center font-medium text-white'>
                            Semester
                          </TableHead>
                          <TableHead className='w-20 border-r text-center font-medium text-white'>
                            Sl. No.
                          </TableHead>
                          <TableHead className='w-36 border-r font-medium text-white'>
                            Course Code
                          </TableHead>
                          <TableHead className='border-r font-medium text-white'>
                            Course Title
                          </TableHead>
                          <TableHead className='w-20 text-center font-medium text-white'>
                            Credit
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {semesters.map((semester) => {
                          const totalRows = semester.courses.length + 1; // +1 for semester total

                          return (
                            <React.Fragment
                              key={`${semester.year}-${semester.semester}`}
                            >
                              {/* Course rows */}
                              {semester.courses.map((course, courseIndex) => (
                                <TableRow
                                  key={`${course.courseCode}-${course.slNo}`}
                                >
                                  {/* Semester column with rowspan */}
                                  {courseIndex === 0 && (
                                    <TableCell
                                      rowSpan={totalRows}
                                      className='align-center border-r bg-primary/5 text-center font-medium'
                                    >
                                      {semester.title}
                                    </TableCell>
                                  )}
                                  <TableCell className='border-r text-center font-medium'>
                                    {course.slNo}
                                  </TableCell>
                                  <TableCell className='border-r font-mono text-sm font-medium'>
                                    {course.courseCode}
                                  </TableCell>
                                  <TableCell className='border-r text-sm'>
                                    {course.courseTitle}
                                  </TableCell>
                                  <TableCell className='text-center font-medium'>
                                    {course.credit}
                                  </TableCell>
                                </TableRow>
                              ))}

                              {/* Semester total row */}
                              <TableRow
                                className={cn('bg-primary/10 font-semibold')}
                              >
                                <TableCell
                                  colSpan={3}
                                  className='border-r text-right'
                                >
                                  Total
                                </TableCell>
                                <TableCell className='text-center font-bold'>
                                  {semester.total}
                                </TableCell>
                              </TableRow>
                            </React.Fragment>
                          );
                        })}

                        {/* Year total row */}
                        {showTotal && (
                          <TableRow className='border-t-2 bg-primary font-bold hover:bg-primary'>
                            <TableCell className='border-r text-center text-white'>
                              {getYearOrdinal(Number.parseInt(year))} Year Total
                            </TableCell>

                            <TableCell
                              colSpan={3}
                              className='border-r text-right text-white'
                            >
                              Total
                            </TableCell>
                            <TableCell className='text-center text-white'>
                              {yearTotal}
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              );
            })}
        </div>

        <div className='pt-4 text-center'>
          <Badge variant='default' className='px-4 py-2 text-base'>
            GRAND Total: {grandTotal} Credits
          </Badge>
        </div>

        {referenceImage && (
          <FullScreenImage
            width={1200}
            height={1200}
            src={referenceImage}
            alt={'Course Map Reference Image'}
            className='mt-8 rounded-md w-full aspect-auto'
          />
        )}
      </div>
    );
  }
);

CourseMapSection.displayName = 'CourseMapSection';
