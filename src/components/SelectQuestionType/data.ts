import { GrDocumentText } from 'react-icons/gr';
import {
  IoIosImages,
  IoMdImage,
  IoIosCheckmarkCircleOutline,
} from 'react-icons/io';

import { IQuestiontypes } from './types';

export const questionTypes: IQuestiontypes[] = [
  { id: 1, title: 'Imagem e múltipla escolha', icon: IoMdImage },
  { id: 2, title: 'Múltipla escolha', icon: IoIosCheckmarkCircleOutline },
  { id: 3, title: 'Imagens', icon: IoIosImages },
  { id: 4, title: 'Descrição', icon: GrDocumentText },
];
