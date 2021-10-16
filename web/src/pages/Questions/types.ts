interface IQuestionProps {
  id: string;
  name: string;
}

interface IQuestionListProps {
  listCompanies: IQuestionProps[];
  query: string;
}

export type { IQuestionProps, IQuestionListProps };
