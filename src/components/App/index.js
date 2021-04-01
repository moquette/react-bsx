import React from 'react';
import logo from '../../logo.svg';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.scss';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <img src={logo} className="w-50" alt="logo" />
      </main>
      <Footer />
    </>
  );
}

export default App;
