import React from 'react';
import articleStyles from '../styles/Article.module.css';
import type { NextPage } from 'next';

import QuestionBox from './QuestionBox';

type Props = {
  questions: IQuestion[];
};

interface IQuestion {
  id: string;
  attributes: Record<string, string>;
}

const Questions: NextPage<Props> = ({ questions }) => {
  return (
    <div className={articleStyles.grid}>
      {questions.map((question: IQuestion, index: number) => {
        return <QuestionBox key={index} question={question} />;
      })}
    </div>
  );
};

export default Questions;
