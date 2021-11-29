export interface IQuestion {
  id?: string;
  question_type?: number;
  description?: string;
  photo_url_first?: string;
  photo_url_second?: string;
  photo_url_third?: string;
  photo_url_fourth?: string;
  answer_fist?: string;
  answer_second?: string;
  answer_third?: string;
  answer_fourth?: string;
  answer_correct?: string;
  active?: boolean;
  form_id?: string;
}

export interface IQuestionContextData {
  questions: IQuestion[];
  getQuestions(): Promise<void>;
  setActive(id: string): Promise<void>;
  deleteQuestion(id: string): Promise<void>;
  createQuestion(data: IQuestion): Promise<string | boolean>;
  updateImage(id: string, data: FormData): Promise<void>;
  getQuestionsByForm(id: string): Promise<IQuestion[]>;
}
