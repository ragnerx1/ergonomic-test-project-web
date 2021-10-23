export interface IQuestion {
  id: string;
  description: string;
  photo_url_first: string | null;
  photo_url_second: string | null;
  photo_url_third: string | null;
  photo_url_fourth: string | null;
  answer_fist: string | null;
  answer_second: string | null;
  answer_third: string | null;
  answer_fourth: string | null;
  answer_correct: string | null;
  active: boolean;
  question_type: 1 | 2 | 3 | 4;
  form_id: string | null;
}

export interface IQuestionContextData {
  questions: IQuestion[];
  getQuestions(): Promise<void>;
  setActive(id: string): Promise<void>;
  deleteQuestion(id: string): Promise<void>;
}
