import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import styles from '../styles/Home.module.css';
import Questions from '../components/Questions';

export async function getServerSideProps() {
  const { data } = await axios.get(
    'https://thawing-taiga-06906.herokuapp.com/api/questions?fields=title,content'
  );
  console.log(data, 'hhgh');

  return {
    props: {
      questions: data.data,
    },
  };
}

const Home = ({
  questions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.question_container}>
      <Questions questions={questions} />
    </div>
  );
};

export default Home;
