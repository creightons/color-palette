import React from 'react';
import Display from './display';
import SavedScreen from './saved-screen';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    let content;
    
    if (true) {
      content = <Display />;
    } else {
      content = <SavedScreen />;
    }
    
    return (
      <div>
        <Header />
        {content}
      </div>
    );
  }
};