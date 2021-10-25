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

export interface IImageAndMultipleChoice {
  question_type: number;
  description: string;
  answer_fist: string;
  answer_second: string;
  answer_third: string;
  answer_fourth: string;
  answer_correct: string;
  form_id: string;
  active: boolean;
}

export interface IMultipleChoice {
  description: string;
  answer_fist: string;
  answer_second: string;
  answer_third: string;
  answer_fourth: string;
  answer_correct: string;
  form_id: string;
  active: boolean;
}

export interface IQuestionContextData {
  questions: IQuestion[];
  getQuestions(): Promise<void>;
  setActive(id: string): Promise<void>;
  deleteQuestion(id: string): Promise<void>;
  createImageAndMultipleChoice(
    data: FormData,
    body: IImageAndMultipleChoice,
  ): Promise<void>;
  createMultipleChoice(data: IMultipleChoice): Promise<void>;
}
