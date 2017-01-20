import React from 'react';
import { ChromePicker } from 'react-color';

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: this.props.activeColor };

    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeColor !== this.props.activeColor) {
        this.setState({ color: this.props.activeColor });
    }
  };

  handleChangeComplete(color, event) {
    this.setState({ color: color.hex });
    this.props.updateActiveColor(
        this.state.color
    );
  };


  render() {
    return (
      <ChromePicker
        color={this.state.color}
        onChangeComplete={this.handleChangeComplete}
        width='300px'
      />
    );
  };
};
