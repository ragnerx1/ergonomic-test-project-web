import { IRegister } from 'pages/Register/types';

export interface IRegisterContextData {
  getRegisters(): Promise<void>;
  setAdmin(id: string): Promise<void>;
  deleteRegister(id: string): Promise<void>;
  createRegister(data: Omit<IRegister, 'id'>): Promise<void>;
  editRegister(id: string, data: Omit<IRegister, 'id'>): Promise<void>;
  registers: IRegister[];
}
