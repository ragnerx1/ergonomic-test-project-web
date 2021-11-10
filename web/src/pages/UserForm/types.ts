export interface IQuestion {
  id: number;
  question_type: number;
  description: string;
  first_photo?: string;
  second_photo?: string;
  third_photo?: string;
  fourth_photo?: string;
  first_answer?: string;
  second_answer?: string;
  third_answer?: string;
  fourth_answer?: string;
  multiple_choice?: { id: number; choice: string }[];
}
