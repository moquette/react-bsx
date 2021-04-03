import React from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Logo title="Logo" />
      </main>
      <Footer />
    </>
  );
}

export default App;
