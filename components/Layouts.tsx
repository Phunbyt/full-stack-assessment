import styles from '../styles/Layout.module.css';
import type { NextPage } from 'next';
import Nav from './Nav';
import Header from './Header';
import Meta from './Meta';

const Layouts: NextPage = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};

export default Layouts;
