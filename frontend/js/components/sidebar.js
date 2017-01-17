import ColorPicker from './color-picker';

export default Sidebar = props => {
  return (
    <aside id='sidebar'>
      <input id='title' />
      <ColorPicker />
      <div id='add' className='button'>Add Color</div>
      <div id='remove' className='button'>Remove Color</div>
    </aside>
  )
};