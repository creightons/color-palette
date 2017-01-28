import React from 'react';

export default class TitleBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
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
		this.props.updateTitle(event.target.value);
	};

	render() {
		let component,
			value = this.props.activeTitle;
			
		if (this.state.editable) {
			component = (
				<TitleInput
					value={value}
					handleChange={this.handleChange}
					handleBlur={this.handleBlur}
				/>
			);
		}
		else {
			component = (
				<div className='title uneditable' onClick={this.handleClick}>
					{value}
				</div>
			);
		}

		return (
			<div>
				<div className='palette-name'>title</div>
				{component}
			</div>
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
