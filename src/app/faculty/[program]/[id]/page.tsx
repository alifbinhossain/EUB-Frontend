import PageHeader from '@/components/page-header';
import React from 'react';
import PageContainer from '@/components/page-container';
import Content from './_components/content';
import { getFacultyDetails } from '@/server/get/get-faculties';
import { IFacultyDetails } from '@/types';

export default async function Page({
  params,
}: {
  params: Promise<{
    program: string;
    id: string;
  }>;
}) {
  const { id } = await params;
  const faculty: IFacultyDetails = await getFacultyDetails(id);

  return (
    <>
      <PageHeader
        image='/images/accounting-and-finance.jpg'
        title={faculty?.teacher_name}
      />

      <PageContainer>
        <Content faculty={faculty} />
      </PageContainer>
    </>
  );
}
