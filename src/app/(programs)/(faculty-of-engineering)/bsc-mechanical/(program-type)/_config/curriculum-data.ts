import type {
  // Assuming 'Course' and other base types are defined as before
  Course,
  CoursePrefix,
  CurriculumSummary,
  // ElectiveCourseGroup,
  PerformanceEvaluation,
  ProgramDetails,
  Semester,
} from '@/app/(programs)/_config/curriculum';

// This is the new, more descriptive type for the Civil electives

export const meSemesterInfo = {
  spring: 'January-April',
  summer: 'May-August',
  fall: 'September-December',
};

export const meElectiveCoursesIPE: Course[] = [
  {
    sl: 1,
    code: 'IPE 435',
    title: 'Modern Manufacturing Technology',
    credits: 3,
  },
  { sl: 2, code: 'IPE 433', title: 'Metal Cutting Processes', credits: 3 },
  { sl: 3, code: 'IPE 437', title: 'CAD/CAM', credits: 3 },
  {
    sl: 4,
    code: 'IPE 483',
    title: 'Production Planning and Control',
    credits: 3,
  },
  { sl: 5, code: 'IPE 485', title: 'Operations Research', credits: 3 },
  { sl: 6, code: 'IPE 487', title: 'Material Handling', credits: 3 },
];

export const meInterDisciplinaryCourses: Course[] = [
  { sl: 1, code: 'CSE-203', title: 'Programming Language', credits: 3 },
  { sl: 2, code: 'CSE-204', title: 'Programming Language Lab', credits: 1 },
  {
    sl: 3,
    code: 'ME-201',
    title: 'Mechanical Engineering Fundamentals',
    credits: 3,
  },
  { sl: 4, code: 'EEE-285', title: 'Biomedical Electronics', credits: 3 },
];

export const meRegularProgramDetails: ProgramDetails = {
  degreeName: 'Bachelor of Science in Mechanical Engineering',
  duration: {
    years: 4,
    semesters: 12,
  },
  creditHours: 161.75,
  courseLoad: '16 Weeks/Semester',
  minimumGPA: 2.5,
  backgroundStudents: 'For H.S.C. Background Students',
};

export const meEveningProgramDetails: ProgramDetails = {
  degreeName: 'Bachelor of Science in Mechanical Engineering',
  duration: {
    years: 4,
    semesters: 12,
  },
  creditHours: 142.75,
  courseLoad: '16 Weeks/Semester',
  minimumGPA: 2.5,
  backgroundStudents: 'For Diploma in Engg. Background Students',
  waiverInfo:
    'Diploma holders in Electrical /Electronics / Computer / Power / Mechanical / Telecommunication are eligible for waivers. Waivers apply only to General Educational Development (GED) group courses. Basic sciences, Mathematics, and engineering courses cannot be exempted. 13.5 credits are waived for students with a Diploma in Engineering background.',
};

export const mePerformanceEvaluation: PerformanceEvaluation[] = [
  {
    category: '(a) Theory Courses:',
    criteria: [
      {
        item: 'Class participation (i.e. attendance)',
        percentage: '20%',
      },
      {
        item: 'Class tests, presentations and assignments',
        percentage: '20%',
      },
      { item: 'Midterm Examination', percentage: '30%' },
      { item: 'Final Examination', percentage: '30%' },
    ],
  },
  {
    category: '(b) Courses on Laboratory/Sessional/Field Work:',
    criteria: [
      { item: 'Class participation and attendance', percentage: '20%' },
      { item: 'Quiz', percentage: '20%' },
      { item: 'Viva Voce', percentage: '20%' },
      { item: 'Performance/Reports', percentage: '40%' },
    ],
  },
  {
    category: '(c) Project and Thesis:',
    criteria: [
      { item: 'Attendance', percentage: '10%' },
      { item: 'Presentation and Viva Voce', percentage: '20%' },
      { item: 'Co-Supervisor', percentage: '20%' },
      { item: 'Supervisor', percentage: '50%' },
    ],
  },
];

export const meCoreCoursesData: Course[] = [
  {
    sl: 1,
    code: 'ME 101',
    title: 'Introduction to Mechanical Engineering',
    credits: 3,
  },
  {
    sl: 2,
    code: 'ME 160',
    title: 'Mechanical Engineering Drawing - I',
    credits: 1.5,
  },
  { sl: 3, code: 'Shop 160', title: 'Foundry and Welding Shops', credits: 1.5 },
  { sl: 4, code: 'ME 171', title: 'Computer Programming Language', credits: 3 },
  {
    sl: 5,
    code: 'ME 172',
    title: 'Computer Programming Language Sessional',
    credits: 0.75,
  },
  { sl: 6, code: 'SHOP 170', title: 'Machine Shop Practice', credits: 1.5 },
  { sl: 7, code: 'ME 203', title: 'Engineering Thermodynamics', credits: 3 },
  {
    sl: 8,
    code: 'ME 204',
    title: 'Engineering Thermodynamics Sessional',
    credits: 0.75,
  },
  { sl: 9, code: 'ME 247', title: 'Engineering Mechanics-I', credits: 3 },
  { sl: 10, code: 'ME 243', title: 'Mechanics of Solids', credits: 3 },
  {
    sl: 11,
    code: 'ME 244',
    title: 'Mechanics of Solids Sessional',
    credits: 0.75,
  },
  {
    sl: 12,
    code: 'ME 260',
    title: 'Mechanical Engineering Drawing-II',
    credits: 1.5,
  },
  { sl: 13, code: 'ME 261', title: 'Numerical Analysis', credits: 3 },
  {
    sl: 14,
    code: 'ME 262',
    title: 'Numerical Analysis Sessional',
    credits: 0.75,
  },
  { sl: 15, code: 'ME 249', title: 'Engineering Mechanics-II', credits: 3 },
  { sl: 16, code: 'ME 305', title: 'Heat Transfer', credits: 3 },
  { sl: 17, code: 'ME 306', title: 'Heat Transfer Sessional', credits: 0.75 },
  { sl: 18, code: 'ME 321', title: 'Fluid Mechanics - I', credits: 3 },
  { sl: 19, code: 'ME 349', title: 'Mechanics of Machinery', credits: 3 },
  {
    sl: 20,
    code: 'ME 350',
    title: 'Mechanics of Machinery Sessional',
    credits: 1.5,
  },
  {
    sl: 21,
    code: 'ME 361',
    title: 'Instrumentation and Measurement',
    credits: 3,
  },
  {
    sl: 22,
    code: 'ME 366',
    title: 'Electro-Mechanical System Design and Practice',
    credits: 1.5,
  },
  {
    sl: 23,
    code: 'ME 307',
    title: 'Heat Transfer Equipment Design',
    credits: 3,
  },
  { sl: 24, code: 'ME 310', title: 'Thermo-Fluid System Design', credits: 1.5 },
  { sl: 25, code: 'ME 323', title: 'Fluid Mechanics-II', credits: 3 },
  { sl: 26, code: 'ME 326', title: 'Fluid Mechanics Sessional', credits: 0.75 },
  { sl: 27, code: 'ME 351', title: 'Machine Design', credits: 4 },
  { sl: 28, code: 'ME 352', title: 'Machine Design Sessional', credits: 1.5 },
  { sl: 29, code: 'ME 417', title: 'Internal Combustion Engines', credits: 3 },
  { sl: 30, code: 'ME 418', title: 'Heat Engines Sessional', credits: 0.75 },
  { sl: 31, code: 'ME 421', title: 'Fluid Machinery', credits: 3 },
  { sl: 32, code: 'ME 422', title: 'Fluid Machinery Sessional', credits: 0.75 },
  { sl: 33, code: 'ME 400', title: 'Project and Thesis', credits: 3 },
  { sl: 34, code: 'ME 419', title: 'Power Plant Engineering', credits: 3 },
  {
    sl: 35,
    code: 'ME 420',
    title: 'Power Plant Engineering Sessional',
    credits: 0.75,
  },
];

export const meGeneralEducationCourses: Course[] = [
  {
    sl: 1,
    code: 'GED-101',
    title: 'Bangladesh Studies (History of Independence of Bangladesh)',
    credits: 3,
  },
  { sl: 2, code: 'ENG-101', title: 'Oral and Written English', credits: 3 },
  {
    sl: 3,
    code: 'BBA-103',
    title: 'Financial & Managerial Accounting',
    credits: 3,
  },
  { sl: 4, code: 'GED-103', title: 'Introduction to Sociology', credits: 3 },
  { sl: 5, code: 'BBA-201', title: 'Business Communication', credits: 3 },
  {
    sl: 6,
    code: 'BBA-207',
    title: 'Industrial and Operational Management',
    credits: 3,
  },
  { sl: 7, code: 'GED-301', title: 'Professional Ethics', credits: 3 },
  { sl: 8, code: 'BBA-313', title: 'Industrial Economics', credits: 3 },
];

export const meBasicScienceCourses: Course[] = [
  { sl: 1, code: 'PHY-101', title: 'Physics-I', credits: 3 },
  { sl: 2, code: 'PHY-102', title: 'Physics-I Lab', credits: 1 },
  { sl: 3, code: 'PHY-103', title: 'Physics-II', credits: 3 },
  { sl: 4, code: 'PHY-104', title: 'Physics-II Lab', credits: 1 },
  { sl: 5, code: 'CHM-101', title: 'Chemistry', credits: 3 },
  { sl: 6, code: 'CHM-102', title: 'Chemistry Lab', credits: 1 },
  {
    sl: 7,
    code: 'MTH-101',
    title: 'Differential and Integral Calculus',
    credits: 3,
  },
  { sl: 8, code: 'MTH-103', title: 'Differential Equations', credits: 3 },
  {
    sl: 9,
    code: 'MTH-201',
    title: 'Linear Algebra and Complex Variable',
    credits: 3,
  },
  {
    sl: 10,
    code: 'MTH-203',
    title: 'Probability and Statistics',
    credits: 3,
  },
  {
    sl: 11,
    code: 'MTH-205',
    title: 'Co-ordinate Geometry and Vector Analysis',
    credits: 3,
  },
  {
    sl: 12,
    code: 'MTH-301',
    title: 'Numerical Methods and Fourier and Laplace Transformation',
    credits: 3,
  },
];

export const meOtherEngineeringCourses: Course[] = [
  {
    sl: 1,
    code: 'EEE 111',
    title: 'Basic Electrical Technology',
    credits: 3,
    contactHours: 3,
  },
];

export const meProjectCourses: Course[] = [
  { sl: 1, code: 'EEE-498', title: 'Project/Thesis', credits: 6 },
];

export const meElectiveCourses: Course[] = [
  { sl: 1, code: 'ME 407', title: 'Advanced Thermodynamics', credits: 3 },
  { sl: 2, code: 'ME 409', title: 'Renewable Energy', credits: 3 },
  { sl: 3, code: 'ME 411', title: 'Combustion and Pollution', credits: 3 },
  { sl: 4, code: 'ME 413', title: 'Energy and Environment', credits: 3 },
  {
    sl: 5,
    code: 'ME 415',
    title: 'Refrigeration and Building Mechanical System',
    credits: 3,
  },
  { sl: 6, code: 'ME 423', title: 'Fluids Engineering', credits: 3 },
  { sl: 7, code: 'ME 425', title: 'Aerodynamics', credits: 3 },
  {
    sl: 8,
    code: 'ME 427',
    title: 'Applied Engineering Mathematics',
    credits: 3,
  },
  {
    sl: 9,
    code: 'ME 429',
    title: 'Similitude in Engineering Mechanics',
    credits: 3,
  },
  { sl: 10, code: 'ME 431', title: 'Gas Dynamics', credits: 3 },
  { sl: 11, code: 'ME 433', title: 'Fluidics', credits: 3 },
  { sl: 12, code: 'ME 437', title: 'Design of Fluid Machines', credits: 3 },
  { sl: 13, code: 'ME 439', title: 'Biomedical Fluid Mechanics', credits: 3 },
  { sl: 14, code: 'ME 441', title: 'Theory of Structures', credits: 3 },
  { sl: 15, code: 'ME 445', title: 'Noise and Vibration', credits: 3 },
  { sl: 16, code: 'ME 447', title: 'Robotics', credits: 3 },
  { sl: 17, code: 'ME 449', title: 'Composite Materials', credits: 3 },
  { sl: 18, code: 'ME 461', title: 'Control Engineering', credits: 3 },
  { sl: 19, code: 'ME 463', title: 'Petroleum Engineering', credits: 3 },
  { sl: 20, code: 'ME 465', title: 'Applied Statistics', credits: 3 },
  { sl: 21, code: 'ME 467', title: 'Automobile Engineering', credits: 3 },
  { sl: 22, code: 'ME 469', title: 'Nuclear Engineering', credits: 3 },
  { sl: 23, code: 'ME 471', title: 'Bio-Engineering', credits: 3 },
  { sl: 24, code: 'ME 473', title: 'Plastics Process Technology', credits: 3 },
  { sl: 25, code: 'ME 475', title: 'Mechatronics', credits: 3 },
  { sl: 26, code: 'ME 481', title: 'Textile Technology', credits: 3 },
];

export const meCoursePrefixes: CoursePrefix[] = [
  { symbol: 'ACT', name: 'Business Administration' },
  { symbol: 'GED', name: 'General Education Development' },
  { symbol: 'CHM', name: 'Chemistry' },
  { symbol: 'ECO', name: 'Economics' },
  { symbol: 'ME', name: 'Mechanical Engineering' },
  { symbol: 'CSE', name: 'Computer Science and Engineering' },
  { symbol: 'MTH', name: 'Mathematics' },
  { symbol: 'EEE', name: 'Electrical and Electronic Engineering' },
  { symbol: 'PHY', name: 'Physics' },
  { symbol: 'ENG', name: 'English' },
  { symbol: 'HSS', name: 'Humanities and Social Science' },
  { symbol: 'IDE', name: 'Interdisciplinary Engineering' },
  { symbol: 'CE', name: 'Civil Engineering' },
  { symbol: 'MGT', name: 'Management' },
];

export const meCurriculumSummary: CurriculumSummary[] = [
  {
    category: 'Core Courses',
    credits: 87,
  },
  {
    category: 'Elective Courses',
    credits: 15,
  },
  {
    category: 'Basic Science and Mathematics Courses',
    credits: 30,
  },
  {
    category: 'General Education Courses: English & Others',
    credits: 15,
  },
  {
    category: 'Inter-Disciplinary Engineering Courses',
    credits: 7,
  },
  {
    category: 'Project/Thesis',
    credits: 6,
  },
];

// The semester data is unchanged from the previous correct version and is omitted here for brevity.
// civilRegularSemesterData and civilEveningSemesterData should be included here in the final file.

// Semester Data remains the same as the previously corrected version...
// HSC Background Students - Regular Program

export const meSemesterData: Semester[] = [
  {
    year: 1,
    semester: 1,
    title: 'Year-1, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'PHY 117',
        courseTitle:
          'Structure of Matter, Electricity and Magnetism and Modern Physics',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 2,
        courseCode: 'CHM 115',
        courseTitle: 'Chemistry - I',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 3,
        courseCode: 'MTH 125',
        courseTitle: 'Differential Calculus, Solid Geometry and Vectors',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 4,
        courseCode: 'ΜΕ 101',
        courseTitle: 'Introduction to Mechanical Engineering',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 5,
        courseCode: 'EEE 159',
        courseTitle: 'Fundamentals of Electrical Engineering',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 6,
        courseCode: 'CHM 116',
        courseTitle: 'Inorganic Quantitative Analysis Sessional',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 7,
        courseCode: 'EEE 160',
        courseTitle: 'Fundamentals of Electrical Engineering Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 8,
        courseCode: 'SHOP 160',
        courseTitle: 'Foundry and Welding Shops',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 9,
        courseCode: 'ΜΕ 160',
        courseTitle: 'Mechanical Engineering Drawing -I',
        credit: 1.5,
        contactHours: 3,
      }, //
    ],
    total: 20.5,
    contactHours: 25.0,
  },
  {
    year: 1,
    semester: 2,
    title: 'Year-1, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'PHY 119',
        courseTitle:
          'Waves and Oscillation, Geometrical Optics and Wave Mechanics',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 2,
        courseCode: 'CHM 117',
        courseTitle: 'Chemistry of Engineering Materials',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 3,
        courseCode: 'MTH 127',
        courseTitle: 'Integral Calculus and Differential Equations',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 4,
        courseCode: 'ME 171',
        courseTitle: 'Computer Programming Language',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 5,
        courseCode: 'HUM 101',
        courseTitle: 'English',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 6,
        courseCode: 'PHY 120',
        courseTitle: 'Physics Sessional',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 7,
        courseCode: 'ME 172',
        courseTitle: 'Computer Programming Language Sessional',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 8,
        courseCode: 'SHOP 170',
        courseTitle: 'Machine Shop Practice',
        credit: 0.75,
        contactHours: 1.5,
      }, //
    ],
    total: 19.75,
    contactHours: 23.5,
  },
  {
    year: 2,
    semester: 1,
    title: 'Year-2, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΜΕ 247',
        courseTitle: 'Engineering Mechanics-I',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 2,
        courseCode: 'EEE 259',
        courseTitle: 'Electrical and Electronics Technology',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 3,
        courseCode: 'MTH 223',
        courseTitle:
          'Vector Calculus, Matrices, Laplace Transform and Series Solution',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 4,
        courseCode: 'ΜΕ 203',
        courseTitle: 'Engineering Thermodynamics',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 5,
        courseCode: 'HUM 201',
        courseTitle: 'Sociology',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 6,
        courseCode: 'EEE 260',
        courseTitle: 'Electrical and Electronics Technology Sessional',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 7,
        courseCode: 'ΜΕ 204',
        courseTitle: 'Engineering Thermodynamics Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
    ],
    total: 19.25,
    contactHours: 21.5,
  },
  {
    year: 2,
    semester: 2,
    title: 'Year-2, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'MME 291',
        courseTitle: 'Metallic Materials',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 2,
        courseCode: 'ΜΕ 261',
        courseTitle: 'Numerical Analysis',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 3,
        courseCode: 'ΜΕ 243',
        courseTitle: 'Mechanics of Solids',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 4,
        courseCode: 'MTH 225',
        courseTitle:
          'Complex Variables, Harmonic Analysis and Partial Differential Equations',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 5,
        courseCode: 'ΜΕ 249',
        courseTitle: 'Engineering Mechanics-II',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 6,
        courseCode: 'MME 292',
        courseTitle: 'Metallic Materials Sessional',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 7,
        courseCode: 'ΜΕ 262',
        courseTitle: 'Numerical Analysis Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 8,
        courseCode: 'ΜΕ 244',
        courseTitle: 'Mechanics of Solids Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 9,
        courseCode: 'ΜΕ 260',
        courseTitle: 'Mechanical Engineering Drawing -II',
        credit: 1.5,
        contactHours: 3,
      }, //
    ],
    total: 20.5,
    contactHours: 25.0,
  },
  {
    year: 3,
    semester: 1,
    title: 'Year-3, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'IPE 331',
        courseTitle: 'Production Processes',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 2,
        courseCode: 'ΜΕ 321',
        courseTitle: 'Fluid Mechanics - I',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 3,
        courseCode: 'ΜΕ 349',
        courseTitle: 'Mechanics of Machinery',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 4,
        courseCode: 'ΜΕ 305',
        courseTitle: 'Heat Transfer',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 5,
        courseCode: 'ΜΕ 361',
        courseTitle: 'Instrumentation and Measurement',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 6,
        courseCode: 'IPE 332',
        courseTitle: 'Production Process Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 7,
        courseCode: 'ΜΕ 350',
        courseTitle: 'Mechanics of Machinery Sessional',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 8,
        courseCode: 'ΜΕ 306',
        courseTitle: 'Heat Transfer Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 9,
        courseCode: 'ΜΕ 366',
        courseTitle: 'Electro-Mechanical System Design and Practice',
        credit: 1.5,
        contactHours: 3,
      }, //
    ],
    total: 20.5,
    contactHours: 25.0,
  },
  {
    year: 3,
    semester: 2,
    title: 'Year-3, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'HUM 303',
        courseTitle: 'Principles of Accounting',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 2,
        courseCode: 'ΜΕ 323',
        courseTitle: 'Fluid Mechanics - II',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 3,
        courseCode: 'ΜΕ 351',
        courseTitle: 'Machine Design',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 4,
        courseCode: 'IPE 381',
        courseTitle: 'Measurement and Quality Control',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 5,
        courseCode: 'ΜΕ 307',
        courseTitle: 'Heat Transfer Equipment Design',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 6,
        courseCode: 'ΜΕ 326',
        courseTitle: 'Fluid Mechanics Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 7,
        courseCode: 'ΜΕ 352',
        courseTitle: 'Machine Design Sessional',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 8,
        courseCode: 'IPE 382',
        courseTitle: 'Measurement and Quality Control Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 9,
        courseCode: 'ΜΕ 310',
        courseTitle: 'Thermo Fluid System Design',
        credit: 1.5,
        contactHours: 3,
      }, //
      {
        slNo: 10,
        courseCode: 'ΜΕ 370',
        courseTitle: 'Industrial Training',
        credit: 0,
        contactHours: 0,
      }, //
    ],
    total: 20.5,
    contactHours: 25.0,
  },
  {
    year: 4,
    semester: 1,
    title: 'Year-4, Semester-1',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΜΕ 421',
        courseTitle: 'Fluid Machinery',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 2,
        courseCode: 'IPE 431',
        courseTitle: 'Machine Tools',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 3,
        courseCode: 'ΜΕ 417',
        courseTitle: 'Internal Combustion Engines',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 4,
        courseCode: 'Optional-a',
        courseTitle: 'Selected from prescribed optional subjects',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 5,
        courseCode: 'Optional-b',
        courseTitle: 'Selected from prescribed optional subjects',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 6,
        courseCode: 'ΜΕ 422',
        courseTitle: 'Fluid Machinery Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 7,
        courseCode: 'IPE 432',
        courseTitle: 'Machine Tools Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 8,
        courseCode: 'ΜΕ 418',
        courseTitle: 'Heat Engines Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 9,
        courseCode: 'ΜΕ 400',
        courseTitle: 'Project and Thesis',
        credit: 3.0,
        contactHours: 6,
      }, //
    ],
    total: 20.25,
    contactHours: 25.5,
  },
  {
    year: 4,
    semester: 2,
    title: 'Year-4, Semester-2',
    courses: [
      {
        slNo: 1,
        courseCode: 'ΜΕ 419',
        courseTitle: 'Power Plant Engineering',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 2,
        courseCode: 'Optional-c',
        courseTitle: 'Selected from prescribed optional subjects',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 3,
        courseCode: 'Optional-d',
        courseTitle: 'Selected from prescribed optional subjects',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 4,
        courseCode: 'Optional-e',
        courseTitle: 'Selected from prescribed optional subjects',
        credit: 3.0,
        contactHours: 3,
      }, //
      {
        slNo: 5,
        courseCode: 'IPE 481',
        courseTitle: 'Industrial Management',
        credit: 4.0,
        contactHours: 4,
      }, //
      {
        slNo: 6,
        courseCode: 'ΜΕ 420',
        courseTitle: 'Power Plant Engineering Sessional',
        credit: 0.75,
        contactHours: 1.5,
      }, //
      {
        slNo: 7,
        courseCode: 'ΜΕ 400',
        courseTitle: 'Project and Thesis',
        credit: 3.0,
        contactHours: 6,
      }, //
    ],
    total: 19.75,
    contactHours: 23.5,
  },
];

// export const meRegularSemesterData: Semester[] = [
//   {
//     year: 1,
//     semester: 1,
//     title: '1st Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'PHY 117',
//         courseTitle:
//           'Structure of Matter, Electricity and Magnetism and Modern Physics',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CHM 115',
//         courseTitle: 'Chemistry - I',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'MTH 125',
//         courseTitle: 'Differential Calculus, Solid Geometry and Vectors',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 101',
//         courseTitle: 'Introduction to Mechanical Engineering',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'EEE 159',
//         courseTitle: 'Fundamentals of Electrical Engineering',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 6,
//         courseCode: 'CHM 116',
//         courseTitle: 'Inorganic Quantitative Analysis Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'EEE 160',
//         courseTitle: 'Fundamentals of Electrical Engineering Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'SHOP 160',
//         courseTitle: 'Foundry and Welding Shops Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 160',
//         courseTitle: 'Mechanical Engineering Drawing -I',
//         credit: 1.5,
//         contactHours: 3,
//       },
//     ],
//     total: 22.5,
//     contactHours: 26.5,
//   },
//   {
//     year: 1,
//     semester: 2,
//     title: '1st Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'PHY 119',
//         courseTitle:
//           'Waves and Oscillation, Geometrical Optics and Wave Mechanics',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CHM 117',
//         courseTitle: 'Chemistry of Engineering Materials',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'MTH 127',
//         courseTitle: 'Integral Calculus and Differential Equations',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 171',
//         courseTitle: 'Computer Programming Language',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'HUM101',
//         courseTitle: 'English',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'PHY 120',
//         courseTitle: 'Physics Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 172',
//         courseTitle: 'Computer Programming Language Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 8,
//         courseCode: 'SHOP 170',
//         courseTitle: 'Machine Shop Practice',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//     ],
//     total: 19.75,
//     contactHours: 23.5,
//   },
//   {
//     year: 1,
//     semester: 3,
//     title: '1st Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'MTH-105',
//         courseTitle:
//           'Mathematics-III (Matrices, Vector Analysis and Fourier Series)',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-131',
//         courseTitle: 'Data Structures',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'CSE-132',
//         courseTitle: 'Data Structures Lab',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 4,
//         courseCode: 'CSE-133',
//         courseTitle: 'Numerical Methods',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'EEE-103',
//         courseTitle: 'Electronics Device and Circuits',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'EEE-104',
//         courseTitle: 'Electronics Device and Circuits Sessional',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//     ],
//     total: 15.0,
//     contactHours: 15.0,
//   },
//   {
//     year: 2,
//     semester: 1,
//     title: '2nd Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'ME 247',
//         courseTitle: 'Engineering Mechanics-I',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'EEE 259',
//         courseTitle: 'Electrical and Electronics Technology',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 3,
//         courseCode: 'MTH 223',
//         courseTitle:
//           'Vector Calculus, Matrices, Laplace Transform and Series Solution',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 203',
//         courseTitle: 'Engineering Thermodynamics',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'HUM 201',
//         courseTitle: 'Sociology',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'EEE 260',
//         courseTitle: 'Electrical and Electronics Technology Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 204',
//         courseTitle: 'Engineering Thermodynamics Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//     ],
//     total: 19.25,
//     contactHours: 21.5,
//   },
//   {
//     year: 2,
//     semester: 2,
//     title: '2nd Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'MME 291',
//         courseTitle: 'Metallic Materials',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'ME 261',
//         courseTitle: 'Numerical Analysis',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 243',
//         courseTitle: 'Mechanics of Solids',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'MTH 225',
//         courseTitle:
//           'Complex Variables, Harmonic Analysis and Partial Differential Equations',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 5,
//         courseCode: 'ME 249',
//         courseTitle: 'Engineering Mechanics-II',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'MME 292',
//         courseTitle: 'Metallic Materials Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 262',
//         courseTitle: 'Numerical Analysis Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 244',
//         courseTitle: 'Mechanics of Solids Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 260',
//         courseTitle: 'Mechanical Engineering Drawing -II',
//         credit: 1.5,
//         contactHours: 3,
//       },
//     ],
//     total: 21.5,
//     contactHours: 25.5,
//   },
//   {
//     year: 2,
//     semester: 3,
//     title: '2nd Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'CSE-231',
//         courseTitle: 'Operating Systems',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-232',
//         courseTitle: 'Operating Systems Sessional',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 3,
//         courseCode: 'CSE-233',
//         courseTitle: 'System Analysis and Design',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'CSE-234',
//         courseTitle: 'System Analysis and Design Lab',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 5,
//         courseCode: 'CSE-235',
//         courseTitle: 'Computer Architecture',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'CSE-236',
//         courseTitle: 'Assembly Language Programming Sessional',
//         credit: 1,
//         contactHours: 1,
//       },
//     ],
//     total: 13.0,
//     contactHours: 13.0,
//   },
//   {
//     year: 3,
//     semester: 1,
//     title: '3rd Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'IPE 331',
//         courseTitle: 'Production Processes',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 2,
//         courseCode: 'ME 321',
//         courseTitle: 'Fluid Mechanics - I',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 349',
//         courseTitle: 'Mechanics of Machinery',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 305',
//         courseTitle: 'Heat Transfer',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'ME 361',
//         courseTitle: 'Instrumentation and Measurement',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'IPE 332',
//         courseTitle: 'Production Process Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 350',
//         courseTitle: 'Mechanics of Machinery Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 306',
//         courseTitle: 'Heat Transfer Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 366',
//         courseTitle: 'Electro-Mechanical System Design and Practice',
//         credit: 1.5,
//         contactHours: 3,
//       },
//     ],
//     total: 20.5,
//     contactHours: 25.0,
//   },
//   {
//     year: 3,
//     semester: 2,
//     title: '3rd Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'HUM 303',
//         courseTitle: 'Principles of Accounting',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'ME 323',
//         courseTitle: 'Fluid Mechanics -II',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 351',
//         courseTitle: 'Machine Design',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'IPE 381',
//         courseTitle: 'Measurement and Quality Control',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'ME 307',
//         courseTitle: 'Heat Transfer Equipment Design',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'ME 326',
//         courseTitle: 'Fluid Mechanics Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 352',
//         courseTitle: 'Machine Design Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 8,
//         courseCode: 'IPE 382',
//         courseTitle: 'Measurement and Quality Control Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 310',
//         courseTitle: 'Thermo Fluid System Design',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 10,
//         courseCode: 'ME 370',
//         courseTitle: 'Industrial Training',
//         credit: 4,
//         contactHours: 4,
//       },
//     ],
//     total: 24.5,
//     contactHours: 29.0,
//   },
//   {
//     year: 3,
//     semester: 3,
//     title: '3rd Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'CSE-331',
//         courseTitle: 'Computer Network',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-332',
//         courseTitle: 'Computer Networks Lab',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 3,
//         courseCode: 'CSE-333',
//         courseTitle: 'Pattern Recognition',
//         credit: 9,
//         contactHours: 9,
//       },
//       // The rest have empty credit/contact hours, so not included in this output
//     ],
//     total: 13.5,
//     contactHours: 13.5,
//   },
//   {
//     year: 4,
//     semester: 1,
//     title: '4th Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'ME 421',
//         courseTitle: 'Fluid Machinery',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'IPE 431',
//         courseTitle: 'Machine Tools',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 417',
//         courseTitle: 'Internal Combustion Engines',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'Optional-a²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'Optional-b²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'ME 422',
//         courseTitle: 'Fluid Machinery Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'IPE 432',
//         courseTitle: 'Machine Tools Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 418',
//         courseTitle: 'Heat Engines Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 400',
//         courseTitle: 'Project and Thesis',
//         credit: 3,
//         contactHours: 6,
//       },
//     ],
//     total: 20.25,
//     contactHours: 26.5,
//   },
//   {
//     year: 4,
//     semester: 2,
//     title: '4th Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'ME 421',
//         courseTitle: 'Fluid Machinery',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'IPE 431',
//         courseTitle: 'Machine Tools',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 417',
//         courseTitle: 'Internal Combustion Engines',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'Optional-a²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'Optional-b²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'ME 422',
//         courseTitle: 'Fluid Machinery Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'IPE 432',
//         courseTitle: 'Machine Tools Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 418',
//         courseTitle: 'Heat Engines Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 400',
//         courseTitle: 'Project and Thesis',
//         credit: 3,
//         contactHours: 6,
//       },
//     ],
//     total: 20.25,
//     contactHours: 26.5,
//   },
//   {
//     year: 4,
//     semester: 3,
//     title: '4th Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'CSE-430',
//         courseTitle: 'Project & Thesis',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-440',
//         courseTitle: 'Industrial Training',
//         credit: 3,
//         contactHours: 3,
//       },
//     ],
//     total: 6,
//     contactHours: 6,
//   },
// ];

// // Diploma Background Students - Evening Program
// export const meEveningSemesterData: Semester[] = [
//   {
//     year: 1,
//     semester: 1,
//     title: '1st Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'PHY 117',
//         courseTitle:
//           'Structure of Matter, Electricity and Magnetism and Modern Physics',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CHM 115',
//         courseTitle: 'Chemistry - I',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'MTH 125',
//         courseTitle: 'Differential Calculus, Solid Geometry and Vectors',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 101',
//         courseTitle: 'Introduction to Mechanical Engineering',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'EEE 159',
//         courseTitle: 'Fundamentals of Electrical Engineering',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 6,
//         courseCode: 'CHM 116',
//         courseTitle: 'Inorganic Quantitative Analysis Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'EEE 160',
//         courseTitle: 'Fundamentals of Electrical Engineering Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'SHOP 160',
//         courseTitle: 'Foundry and Welding Shops Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 160',
//         courseTitle: 'Mechanical Engineering Drawing -I',
//         credit: 1.5,
//         contactHours: 3,
//       },
//     ],
//     total: 22.5,
//     contactHours: 26.5,
//   },
//   {
//     year: 1,
//     semester: 2,
//     title: '1st Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'PHY 119',
//         courseTitle:
//           'Waves and Oscillation, Geometrical Optics and Wave Mechanics',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CHM 117',
//         courseTitle: 'Chemistry of Engineering Materials',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'MTH 127',
//         courseTitle: 'Integral Calculus and Differential Equations',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 171',
//         courseTitle: 'Computer Programming Language',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'HUM101',
//         courseTitle: 'English',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'PHY 120',
//         courseTitle: 'Physics Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 172',
//         courseTitle: 'Computer Programming Language Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 8,
//         courseCode: 'SHOP 170',
//         courseTitle: 'Machine Shop Practice',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//     ],
//     total: 19.75,
//     contactHours: 23.5,
//   },
//   {
//     year: 1,
//     semester: 3,
//     title: '1st Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'MTH-105',
//         courseTitle:
//           'Mathematics-III (Matrices, Vector Analysis and Fourier Series)',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-131',
//         courseTitle: 'Data Structures',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'CSE-132',
//         courseTitle: 'Data Structures Lab',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 4,
//         courseCode: 'CSE-133',
//         courseTitle: 'Numerical Methods',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'EEE-103',
//         courseTitle: 'Electronics Device and Circuits',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'EEE-104',
//         courseTitle: 'Electronics Device and Circuits Sessional',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//     ],
//     total: 15.0,
//     contactHours: 15.0,
//   },
//   {
//     year: 2,
//     semester: 1,
//     title: '2nd Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'ME 247',
//         courseTitle: 'Engineering Mechanics-I',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'EEE 259',
//         courseTitle: 'Electrical and Electronics Technology',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 3,
//         courseCode: 'MTH 223',
//         courseTitle:
//           'Vector Calculus, Matrices, Laplace Transform and Series Solution',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 203',
//         courseTitle: 'Engineering Thermodynamics',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'HUM 201',
//         courseTitle: 'Sociology',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'EEE 260',
//         courseTitle: 'Electrical and Electronics Technology Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 204',
//         courseTitle: 'Engineering Thermodynamics Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//     ],
//     total: 19.25,
//     contactHours: 21.5,
//   },
//   {
//     year: 2,
//     semester: 2,
//     title: '2nd Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'MME 291',
//         courseTitle: 'Metallic Materials',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'ME 261',
//         courseTitle: 'Numerical Analysis',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 243',
//         courseTitle: 'Mechanics of Solids',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'MTH 225',
//         courseTitle:
//           'Complex Variables, Harmonic Analysis and Partial Differential Equations',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 5,
//         courseCode: 'ME 249',
//         courseTitle: 'Engineering Mechanics-II',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'MME 292',
//         courseTitle: 'Metallic Materials Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 262',
//         courseTitle: 'Numerical Analysis Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 244',
//         courseTitle: 'Mechanics of Solids Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 260',
//         courseTitle: 'Mechanical Engineering Drawing -II',
//         credit: 1.5,
//         contactHours: 3,
//       },
//     ],
//     total: 21.5,
//     contactHours: 25.5,
//   },
//   {
//     year: 2,
//     semester: 3,
//     title: '2nd Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'CSE-231',
//         courseTitle: 'Operating Systems',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-232',
//         courseTitle: 'Operating Systems Sessional',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 3,
//         courseCode: 'CSE-233',
//         courseTitle: 'System Analysis and Design',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'CSE-234',
//         courseTitle: 'System Analysis and Design Lab',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 5,
//         courseCode: 'CSE-235',
//         courseTitle: 'Computer Architecture',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'CSE-236',
//         courseTitle: 'Assembly Language Programming Sessional',
//         credit: 1,
//         contactHours: 1,
//       },
//     ],
//     total: 13.0,
//     contactHours: 13.0,
//   },
//   {
//     year: 3,
//     semester: 1,
//     title: '3rd Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'IPE 331',
//         courseTitle: 'Production Processes',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 2,
//         courseCode: 'ME 321',
//         courseTitle: 'Fluid Mechanics - I',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 349',
//         courseTitle: 'Mechanics of Machinery',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'ME 305',
//         courseTitle: 'Heat Transfer',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'ME 361',
//         courseTitle: 'Instrumentation and Measurement',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'IPE 332',
//         courseTitle: 'Production Process Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 350',
//         courseTitle: 'Mechanics of Machinery Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 306',
//         courseTitle: 'Heat Transfer Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 366',
//         courseTitle: 'Electro-Mechanical System Design and Practice',
//         credit: 1.5,
//         contactHours: 3,
//       },
//     ],
//     total: 20.5,
//     contactHours: 25.0,
//   },
//   {
//     year: 3,
//     semester: 2,
//     title: '3rd Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'HUM 303',
//         courseTitle: 'Principles of Accounting',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'ME 323',
//         courseTitle: 'Fluid Mechanics -II',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 351',
//         courseTitle: 'Machine Design',
//         credit: 4,
//         contactHours: 4,
//       },
//       {
//         slNo: 4,
//         courseCode: 'IPE 381',
//         courseTitle: 'Measurement and Quality Control',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'ME 307',
//         courseTitle: 'Heat Transfer Equipment Design',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'ME 326',
//         courseTitle: 'Fluid Mechanics Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'ME 352',
//         courseTitle: 'Machine Design Sessional',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 8,
//         courseCode: 'IPE 382',
//         courseTitle: 'Measurement and Quality Control Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 310',
//         courseTitle: 'Thermo Fluid System Design',
//         credit: 1.5,
//         contactHours: 3,
//       },
//       {
//         slNo: 10,
//         courseCode: 'ME 370',
//         courseTitle: 'Industrial Training',
//         credit: 4,
//         contactHours: 4,
//       },
//     ],
//     total: 24.5,
//     contactHours: 29.0,
//   },
//   {
//     year: 3,
//     semester: 3,
//     title: '3rd Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'CSE-331',
//         courseTitle: 'Computer Network',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-332',
//         courseTitle: 'Computer Networks Lab',
//         credit: 1.5,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 3,
//         courseCode: 'CSE-333',
//         courseTitle: 'Pattern Recognition',
//         credit: 9,
//         contactHours: 9,
//       },
//       // The rest have empty credit/contact hours, so not included in this output
//     ],
//     total: 13.5,
//     contactHours: 13.5,
//   },
//   {
//     year: 4,
//     semester: 1,
//     title: '4th Year 1st Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'ME 421',
//         courseTitle: 'Fluid Machinery',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'IPE 431',
//         courseTitle: 'Machine Tools',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 417',
//         courseTitle: 'Internal Combustion Engines',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'Optional-a²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'Optional-b²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'ME 422',
//         courseTitle: 'Fluid Machinery Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'IPE 432',
//         courseTitle: 'Machine Tools Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 418',
//         courseTitle: 'Heat Engines Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 400',
//         courseTitle: 'Project and Thesis',
//         credit: 3,
//         contactHours: 6,
//       },
//     ],
//     total: 20.25,
//     contactHours: 26.5,
//   },
//   {
//     year: 4,
//     semester: 2,
//     title: '4th Year 2nd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'ME 421',
//         courseTitle: 'Fluid Machinery',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'IPE 431',
//         courseTitle: 'Machine Tools',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 3,
//         courseCode: 'ME 417',
//         courseTitle: 'Internal Combustion Engines',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 4,
//         courseCode: 'Optional-a²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 5,
//         courseCode: 'Optional-b²',
//         courseTitle: 'Selected from prescribed optional subjects',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 6,
//         courseCode: 'ME 422',
//         courseTitle: 'Fluid Machinery Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 7,
//         courseCode: 'IPE 432',
//         courseTitle: 'Machine Tools Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 8,
//         courseCode: 'ME 418',
//         courseTitle: 'Heat Engines Sessional',
//         credit: 0.75,
//         contactHours: 1.5,
//       },
//       {
//         slNo: 9,
//         courseCode: 'ME 400',
//         courseTitle: 'Project and Thesis',
//         credit: 3,
//         contactHours: 6,
//       },
//     ],
//     total: 20.25,
//     contactHours: 26.5,
//   },
//   {
//     year: 4,
//     semester: 3,
//     title: '4th Year 3rd Semester',
//     courses: [
//       {
//         slNo: 1,
//         courseCode: 'CSE-430',
//         courseTitle: 'Project & Thesis',
//         credit: 3,
//         contactHours: 3,
//       },
//       {
//         slNo: 2,
//         courseCode: 'CSE-440',
//         courseTitle: 'Industrial Training',
//         credit: 3,
//         contactHours: 3,
//       },
//     ],
//     total: 6,
//     contactHours: 6,
//   },
// ];
