import React from 'react';

export default class SavedScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentWillMount() {
		this.props.fetchSavedPalettes();
	}
	
	render() {
		let content;
		
		if (this.props.loading) {
			content = (
				<div>Loading...</div>
			);
		}
		else {
			content = (
				<div className='palette-list'>
					{this.props.palettes.map(palette => {
						return (
							<MiniPalette
								colors={palette.colors}
								id={palette.id}
								title={palette.title}
								key={palette.id}
							/>
						);
					})}
				</div>
			);
		}
		
		return content;
	}
};

const MiniPalette = (props) => {
	return (
		<div className='mini-panel'>
			<div className='title'>
				{props.title}
			</div>
			<div className='colors'>
				{props.colors.map((color, index) => {
					return (
						<div
							key={index}
							style={{
								backgroundColor: color
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};
