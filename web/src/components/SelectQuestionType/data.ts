import { GrDocumentText } from 'react-icons/gr';
import {
  IoIosImages,
  IoMdImage,
  IoIosCheckmarkCircleOutline,
} from 'react-icons/io';

import { IQuestiontypes } from './types';

export const questionTypes: IQuestiontypes[] = [
  { id: 0, title: 'Imagem e múltipla escolha', icon: IoMdImage },
  { id: 1, title: 'Múltipla escolha', icon: IoIosCheckmarkCircleOutline },
  { id: 2, title: 'Imagens', icon: IoIosImages },
  { id: 3, title: 'Descrição', icon: GrDocumentText },
];
