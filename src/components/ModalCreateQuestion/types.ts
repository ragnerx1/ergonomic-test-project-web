export interface IProps {
  status: boolean;
  onPress(): void;
  form?: string;
  id: string | undefined;
}

export interface ICreateQuestionActions {
  handleVisibleModal(): void;
}
