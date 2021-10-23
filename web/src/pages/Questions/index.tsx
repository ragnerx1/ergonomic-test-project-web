/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineSearch, AiFillDelete, AiFillEdit } from 'react-icons/ai';

import Button from '@components/Button';
import Header from '@components/Header';
import ModalCreateQuestion from '@components/ModalCreateQuestion';
import ModalDeleteQuestion from '@components/ModalDeleteQuestion';
import { ICreateQuestionActions } from '@components/ModalCreateQuestion/types';
import { IIModalDeleteQuestionActions } from '@components/ModalDeleteQuestion/types';
import { useQuestion } from '@hooks/questions';
import { IQuestion } from '@hooks/questions/types';
import { IQuestionListProps } from './types';
import { Container } from './styles';

const Questions: React.FC = () => {
  const createQuestionModal = useRef<ICreateQuestionActions>(null);
  const deleteQuestionModal = useRef<IIModalDeleteQuestionActions>(null);

  const { questions, getQuestions, setActive } = useQuestion();

  const [serach, setSearch] = useState('');
  const [selectedQuestion, seletctedQuestion] = useState<IQuestion>();

  useEffect(() => {
    getQuestions().then();
  }, [getQuestions]);

  function handleModalDelete(question: IQuestion) {
    seletctedQuestion(question);
    deleteQuestionModal.current?.handleVisibleModal();
  }

  async function handleChangeStatus(question: IQuestion) {
    await setActive(question.id);
  }

  const filter = (listQuestions: IQuestion[], query: string) =>
    listQuestions.filter(question =>
      question.description.toLowerCase().includes(query));

  function CompaniesList({ listQuestions, query }: IQuestionListProps) {
    const filtered = filter(listQuestions, query);

    return (
      <>
        {filtered.map(question => (
          <section key={question.id}>
            <div className="id">{`${question.id.substring(0, 25)}...`}</div>
            <div className="company">
              <p>{question.description}</p>
            </div>
            <div className="company">
              <input
                type="checkbox"
                checked={question.active}
                onChange={() => handleChangeStatus(question)}
              />
            </div>
            <div className="option">
              <button
                type="button"
                onClick={() => console.log('ola')}
              >
                <AiFillEdit color="black" />
              </button>
            </div>
            <div className="option">
              <button
                type="button"
                onClick={() => handleModalDelete(question)}
              >
                <AiFillDelete color="black" />
              </button>
            </div>
          </section>
        ))}
      </>
    );
  }

  return (
    <Container>
      <Header buttomBack />

      <section>
        <div>
          <h1>Perguntas</h1>

          <div className="input-container">
            <label htmlFor="search">
              <AiOutlineSearch color="black" />
            </label>
            <input
              id="search"
              type="text"
              placeholder="Buscar perguntas"
              value={serach}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <Button
            title="Cadastrar nova pergunta"
            onPress={() => createQuestionModal.current?.handleVisibleModal()}
          />
        </div>

        <section className="header-table">
          <div>
            <h3>ID</h3>
          </div>
          <div className="header-company">
            <h3>NOME</h3>
          </div>
          <div>
            <h3>ATIVO</h3>
          </div>
          <div>
            <h3>EDITAR</h3>
          </div>
          <div>
            <h3>DELETAR</h3>
          </div>
        </section>

        <CompaniesList listQuestions={questions} query={serach} />
      </section>

      <ModalCreateQuestion ref={createQuestionModal} />
      <ModalDeleteQuestion ref={deleteQuestionModal} question={selectedQuestion!} />
    </Container>
  );
};

export default Questions;
