import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        React &bull; Bootstrap &bull; SASS &amp; eXtras
        <br />
        Edit <code>src/components/App.js</code> and save to reload
        <br />
        RBSX 1.0.0 &bull; &copy;{new Date().getFullYear()} Powered by Dovebox
      </p>
    </footer>
  );
};

export default Footer;
