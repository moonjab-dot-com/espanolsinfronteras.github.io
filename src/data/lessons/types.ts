export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonModule {
  id: string;
  courseSlug: string;
  chapterId: number;
  titleEs: string;
  titleEn: string;
  estimatedMinutes: number;
  content: string; // HTML string rendered inside .lesson-content
  quiz: QuizQuestion[]; // exactly 10
}
