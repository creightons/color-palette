import React from 'react';
import MainPaletteContainer from '../containers/main-palette-container';
import SidebarContainer from '../containers/sidebar-container';

export default (props) => {
  return (
    <main id='main-display'>
      <MainPaletteContainer />
      <SidebarContainer />
    </main>
  );
};
