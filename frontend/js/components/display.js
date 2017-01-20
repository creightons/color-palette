import React from 'react';
import MainPaletteContainer from '../containers/main-palette-container';
import SavedScreen from './saved-screen';

export default (props) => {
  let content;

  if (true) {
    content = <MainPaletteContainer />
  }
  else {
    content = <SavedScreen />
  }

  return (
    <main id='main-display'>
      {content}
    </main>
  );
};
