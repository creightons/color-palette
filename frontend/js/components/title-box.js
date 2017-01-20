import React from 'react';

export default class TitleBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			value: '',
		};
		
		this.handleClick = this.handleClick.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
	};

	handleClick() {
		this.setState({ editable: true });
	};

	handleBlur() {
		this.setState({ editable: false });
	};

	handleChange(event) {
		this.setState({ value: event.target.value });
	};

	render() {
		let component;
		if (this.state.editable) {
			component = (
				<TitleInput
					value={this.state.value}
					handleChange={this.handleChange}
					handleBlur={this.handleBlur}
				/>
			);
		}
		else {
			component = (
				<div className='title uneditable' onClick={this.handleClick}>
					{this.state.value}
				</div>
			);
		}

		return (
			component
		);
	};
};


class TitleInput extends React.Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		this.Input.focus();
	}

	render() {
		return (
			<input
				ref={ input => { this.Input = input; } }
				className='editable title' 
				value={this.props.value}
				onChange={this.props.handleChange}
				onBlur={this.props.handleBlur}
			/>
		);
	};
};
