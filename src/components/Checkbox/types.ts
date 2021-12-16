export interface ICheckbox {
  choice: {
    id: string | number;
    choice: string;
  };
  selectedAnswer(id: string | number): void;
  disabled: boolean;
}
