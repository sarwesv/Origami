export interface Question {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0-3
}

export interface Quiz {
  title: string;
  questions: Question[];
}
