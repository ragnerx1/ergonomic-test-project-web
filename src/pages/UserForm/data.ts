import { IQuestion } from './types';

export const form: IQuestion[] = [
  {
    id: 0,
    question_type: 1,
    description:
      'Qual imagem mais se assemelha ao local onde você apoia seu computador a maior parte do tempo para trabalhar?',
    first_photo:
      'https://www.moveisdevalor.com.br/portal/upload/files/image/16475/pessoa_trabalhando_na_cama.png',
    second_photo:
      'https://st.depositphotos.com/1743476/1276/i/950/depositphotos_12765235-stock-photo-young-man-at-laptop.jpg',
    third_photo:
      'https://static6.depositphotos.com/1015060/665/i/950/depositphotos_6651350-stock-photo-woman-using-computer-in-kitchen.jpg',
    fourth_photo:
      'https://www.meupositivo.com.br/panoramapositivo/wp-content/uploads/2019/02/original-845ef4a870d43861d9b59d340aaf9035.jpg',
    first_answer:
      'Há necessidade de rever o local onde você apoia seu computador ,Esta posição pode parecer prática, mas não proporciona uma acomodação confortável à sua coluna vertebral, ombros e punho do ponto de vista Ergonômico. Procure utilizar uma mesa compatível com a sua altura. Veja o vídeo ao  final da avaliação.',
    second_answer:
      'Nesta posição você está  expondo seu corpo ao risco de desenvolver doenças osteomusculares. Procure trabalhar em uma mesa compatível com sua altura.',
    third_answer:
      'Você está utilizando uma mesa, isso é bom. Pode ser necessário alguma adaptação para que esta mesa esteja compatível com sua altura proporcionando maior conforta a seus punhos e ombros.',
    fourth_answer: 'Está mesa é ergonômica e facilita o conforto. Muito bom!',
  },
  {
    id: 1,
    question_type: 1,
    description: 'Qual cadeira mais parece com a que você usa na maior parte do tempo:',
    first_photo:
      'https://a-static.mlcdn.com.br/618x463/cadeira-tramontina-diana-eco-em-polipropileno-reciclado-preto/marinbrasiltramontina/2047/971ce424b31659043ce0bd8d29c2ea18.jpg',
    second_photo:
      'https://static.santimorumbi.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/cadeira_escrit_rio_sem_bra_o_blm_office_preta_1.jpg',
    third_photo:
      'https://static3.tcdn.com.br/img/img_prod/464234/cadeira_giratoria_executiva_ergonomica_escritorio_back_system_lymdecor_4697_1_20210113163505.jpg',
    fourth_photo:
      'https://attraktiva.vteximg.com.br/arquivos/ids/191468-1000-1000/Sofa-Ohio-3-Lugares--L--208cm--100--Couro-Natural-Preto.png?v=637407086128630000',
    first_answer:
      'Há necessidade de adequar a cadeira que você está utilizando para uma com assento/ encosto  almofadados e regulagem de altura.  Assista ao vídeo de dicas ao final desta avaliação.',
    second_answer:
      'Esta cadeira é ergonômica do ponto de vista da regulagem de altura, mas se possível adquira uma que tenha suporte para braços também.',
    third_answer:
      'Esta cadeira é ergonômica e possibilita regulagens e adequação à mesa utilizada para trabalho.',
    fourth_answer:
      'É necessário utilizar cadeira com regulagem de altura e, se possível,  apoio para braços. Sofás não são recomendados para serem utilizados como assento para trabalho com computador devido a não possibilitar regulagem de altura e não permitir um suporte adequado à coluna vertebral.',
  },
  {
    id: 2,
    question_type: 2,
    description: 'Que tipo de computador você usa? ',
    multiple_choice: [
      { id: 0, choice: 'Notebook' },
      { id: 1, choice: 'Desktop' },
    ],
  },
  {
    id: 3,
    question_type: 3,
    description:
      'Você usa suporte ou adaptação para o monitor ou tela do notebook ficar na altura dos seus olhos, sem inclinar o pescoço?',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_photo: 'https://img.kalunga.com.br/fotosdeprodutos/666032z.jpg',
    first_answer:
      'Você está utilizando o Notebook de maneira ergonômica utilizando suporte para eleva-lo à altura dos olhos.',
    second_answer:
      'Há necessidade de utilizar um suporte para Notebooks afim de proporcionar mais conforto para seus ombros e pescoço. Notebooks utilizados diretamente sobre a mesa ou outra superfície tendem a sobrecarregar o pescoço e os músculos do trapézio, predispondo à dores. Procure elevar o Notebook com suporte apropriado, livros ou caixas para que fique na altura da linha dos olhos.',
   // third_answer:
      //'Utilize apoios para elevar a altura do monitor  de maneira que fique na altura da linha dos olhos.',
    //fourth_answer:
      //'Você está cuidando de seu bem estar utilizando apoio para elevar e regular a altura do monitor em relação a linha dos olhos.',
  },
  {
    id: 4,
    question_type: 2,
    description: 'Você usa teclado e mouse conectados ao notebook ?',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
      { id: 3, choice: 'Não uso notebook' },
    ],
    first_answer:
      'Que bom! Você está aproveitando dispositivos ergonômicos para facilitar seu trabalho e contribui com seu  bem estar.',
    second_answer:
      ': Se faz necessário, quando se usa Notebooks, a utilização de teclado e mouse acoplados para que seu pescoço, ombros e punhos estejam mais confortáveis. Geralmente a não utilização de teclado e mouse acoplado ao notebook predispõe a sobrecarregar o músculo do Trapézio e gerar dores nos ombros. Melhore seu conforto fazendo uso destes periféricos.',
  },
  {
    id: 5,
    question_type: 3,
    description: 'Você usa pad mouse ergonômico',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_photo:
      'https://lh4.googleusercontent.com/-7-pXZhtaPDeL7FhwII3uZpGwkqMj6NbKf066JTJPbiZvLFUHodpzFT-XYQp9RWLKPLKIy9INDL3Efd1G11kJIkNT-MLyoU2TvEcjWr2Gi59riG21xOF8FYg8gWbZyGWAA=w450',
    first_answer:
      'Parabéns! você está cuidando de seu punho e do Túnel do Carpo, por onde passam os tendões dos dedos da mão',
    second_answer:
      'Há necessidade de se utilizar o Mousepad, ele lhe auxilia a manter o punho em posição neutra e prevenir desgastes dos tendões e do Túnel do Carpo (por onde passam os tendões dos dedos da mão.',
  },
  {
    id: 6,
    question_type: 2,
    description:
      'A iluminação no local onde você trabalha é adequada, não gerando reflexos na tela e nem sendo pouca a ponto da luz do monitor ser mais forte que o ambiente?',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_answer:
      'Uma boa iluminação favorece o conforto ao trabalhar, que bom que você cuida este aspecto!',
    second_answer:
      'Há necessidade de adequar a iluminação do ambiente de maneira que a luz do ambiente seja mais forte do que a luz da tela do computador para evitar  prejuízos ao sistema ocular.',
  },
  {
    id: 7,
    question_type: 2,
    description:
      'Quanto a ruídos como você classificaria o local onde você trabalha:',
    multiple_choice: [
      { id: 0, choice: 'Silencioso' },
      { id: 1, choice: 'Ruídos domésticos' },
      { id: 2, choice: 'Ruídos externos' },
      { id: 3, choice: 'Ruídos persistentes' },
    ],
  },
  {
    id: 8,
    question_type: 3,
    description:
      'Você usa apoio para pés (equipamento, caixa) quando, para ficar com os braços na altura adequada, seus pés não alcançam o chão?',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_photo:
      'https://www.casadaergonomia.com.br/wp-content/uploads/2021/03/apoio-para-pes.png',
    first_answer:
      'Utilizando o apoio para os pés você mantém uma melhor circulação dos membros inferiores e não sobrecarrega a articulação do joelho.',
    second_answer:
      'Se faz necessário a utilização de apoio para os pés  quando seus pés ficam suspensos no ar  acarreta compressão de vasos sanguíneos e compromete a  circulação dos membros inferiores e a  sobrecarga da articulação do joelho. Procure utilizar apoio para os pés.',
  },
  {
    id: 9,
    question_type: 2,
    description: 'Você faz pausas para alongamento com frequência? ',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_answer:
      'Seus músculos e tendões agradecem! Continue cuidando de seu corpo! Os alongamentos promovem o alinhamento das fibras musculares promovendo melhor desempenho dos músculos e tendões, melhora a circulação e acelera a metabolização do Ácido Lácteo (residuo que causa dor nos músculos) ',
    second_answer:
      'Há necessidades de se fazer pausas para alongamentos durante o dia. Seus músculos e tendões precisam de reparos e descanso! Os alongamentos promovem o alinhamento das fibras musculares promovendo melhor desempenho dos músculos e tendões, melhora a circulação e acelera a metabolização do Ácido Lácteo (resíduo que causa dor nos músculos). Quando alonga você prolonga a vida de seus músculos e tendões bem como de seu corpo todo!',
  },
  {
    id: 10,
    question_type: 2,
    description:
      'O teclado e mouse ficam posicionados de modo que você não precise esticar os braços ',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_answer:
      'Muito bem você está permitindo que seus ombros e braços estejam em posição mais confortável.',
    second_answer:
      'Procure organizar seu local de trabalho de maneira que os objetos que mais utiliza, mouse, teclado, telefone ou outro, se encontrem ao alcance de suas mãos com os braços em angulação próximo a 90° e que possa acessa-los sem esforço. Teclado e mouse devem ficar perto da borda da mesa para facilitar o acesso e utilização mais confortável.',
  },
  {
    id: 11,
    question_type: 1,
    description: 'Qual geralmente é sua postura ao usar o celular?',
    first_photo:
      'https://nutrimental.com.br/wp-content/uploads/2019/01/homem-sentado-no-sofa-mexendo-no-celular-com-pescoço-inlinado.jpg',
    second_photo:
      'https://patricialacombe.com.br/blog/wp-content/uploads/2018/03/179186-voce-sabe-qual-e-a-postura-correta-para-usar-o-celular-730x340.jpg',
    first_answer:
      'Se faz necessário utilizar o celular na posição vertical, evitando olhar demasiado para baixo e sobrecarregar musculatura do pescoço e ombros. Procure utilizar o celular na posição do aparelho em pé como o exemplo da figura 2 para  maior conforto da coluna cervical e toráxica.',
    second_answer:
      'Desta forma sua cabeça está apoiada adequadamente e não sobrecarrega ombros e pescoço. A Ergonomia é um valor para você!',
  },
  {
    id: 12,
    question_type: 2,
    description: 'Em média quantas horas você dorme?',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_answer:
      'Durante o sono um hormônio muito importante é produzido: a Melatonina, um dos principais hormônios reguladores de diversos processos intracelulares.Quanto mais Melatonina melhor a reparação celular e retardo do envelhecimento das células do organismo. O ideal é dormir de 6-8h por noite, dependendo da pessoa e da idade. Invista em uma boa noite de sono.',
  },
  {
    id: 13,
    question_type: 2,
    description: 'Em média, quantos copos de água você bebe por dia?',
    multiple_choice: [
      { id: 0, choice: 'Sim' },
      { id: 1, choice: 'Não' },
    ],
    first_answer:
      'A água é fundamental para todas as funções de nosso organismo, 80% dele é líquido. A hidratação adequada influencia diretamente em nosso bem-estar e desempenho. O ideal é ingerirmos de 6-8 copos de água por dia ou mais dependendo do peso corporal e do clima.',
  },
  {
    id: 14,
    question_type: 2,
    description:
      'Quantas vezes na semana você pratica alguma atividade física?',
    multiple_choice: [
      { id: 0, choice: 'Nenhuma' },
      { id: 1, choice: '1 vez' },
      { id: 2, choice: '3 vezes' },
      { id: 3, choice: '5 vezes ou mais' },
    ],
  },
  {
    id: 15,
    question_type: 2,
    description:
      'Caso você sinta alguma dor ou desconforto, o que você acredita provocar o sintoma?',
    multiple_choice: [
      { id: 0, choice: 'Problemas ortopédicos, doenças já diagnosticadas' },
      { id: 1, choice: 'Tensão/estresse' },
      { id: 2, choice: 'Má postura física' },
      { id: 3, choice: 'Características do Trabalho' },
      { id: 4, choice: 'Ergonomia' },
      { id: 5, choice: 'Sedentarismo' },
      { id: 6, choice: 'Sobrepeso' },
    ],
  },
];
