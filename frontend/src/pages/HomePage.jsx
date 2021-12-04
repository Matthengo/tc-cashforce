import React from 'react';
import Header from '../components/Header';
import VerticalTabMenu from '../components/VerticalTabMenu/VerticalTabMenu';
import NotaFiscalPage from './NotaFiscalPage';

function HomePage() {
  return (
    <>
      <Header />
      <VerticalTabMenu>
        <NotaFiscalPage />
      </VerticalTabMenu>
    </>
  );
};

export default HomePage;
