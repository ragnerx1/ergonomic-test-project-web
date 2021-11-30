import { IRegister } from 'pages/Users/types';

export interface IRegisterContextData {
  getRegisters(): Promise<void>;
  setAdmin(id: string): Promise<void>;
  deleteRegister(id: string): Promise<void>;
  createRegister(data: Omit<IRegister, 'id'>): Promise<void>;
  editRegister(id: string, data: Omit<IRegister, 'id'>): Promise<void>;
  importRegisters(data: FormData): Promise<void>;
  registers: IRegister[];
}
