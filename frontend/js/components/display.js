import React from 'react';
import MainPaletteContainer from '../containers/main-palette-container';
import Sidebar from './sidebar';

export default (props) => {
  return (
    <main id='main-display'>
      
      <MainPaletteContainer />
      <Sidebar />
    </main>
  );
};
