import React from 'react';
import articleStyles from '../styles/Article.module.css';
import type { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

type Props = {
  question: IQuestion;
};

interface IQuestion {
  id: string;
  attributes: Record<string, string>;
}
const QuestionBox: NextPage<Props> = ({ question }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  const { title, content } = question.attributes;

  return (
    <div className={articleStyles.card_container}>
      <div className={articleStyles.card_header} onClick={toggleContent}>
        <h2>{title}</h2>
        <FontAwesomeIcon icon={faPlusCircle} />
      </div>
      <div
        className={
          (articleStyles.card_content,
          isOpen ? `${articleStyles.active}` : articleStyles.inactive)
        }
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default QuestionBox;
