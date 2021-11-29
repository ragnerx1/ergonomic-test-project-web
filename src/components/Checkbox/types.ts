export interface ICheckbox {
  choice: {
    id: number;
    choice: string;
  };
  selectedAnswer(id: number): void;
  disabled: boolean;
}
