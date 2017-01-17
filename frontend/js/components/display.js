import MainPaletteContainer from '../containers/main-palette-container';
import Sidebar from './sidebar';

export default Display = props => {
  return (
    <main id='main-display'>
      
      <MainPaletteContainer />
      <Sidebar />
    </main>
  );
};