import React from 'react';
import Display from './display';
import SidebarContainer from '../containers/sidebar-container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div>
        <Display />
        <SidebarContainer />
      </div>
    );
  }
};
