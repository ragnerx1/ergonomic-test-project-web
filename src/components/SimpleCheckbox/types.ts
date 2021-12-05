export interface ISimpleCheckbox {
  id: string;
  label?: string;
  checked: boolean;
  onChange(): void;
}
