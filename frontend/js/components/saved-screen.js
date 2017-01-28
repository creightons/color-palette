import React from 'react';

export default (props) => {
	return (
		<div>
			<button
				onClick={props.loadPalettePage}
				style={{
					'position': 'fixed',
					'top': '50%',
					'left': '50%',
					'transform': 'translate(-50%, -50%)',
					'padding': '30px',
					'fontSize': '30px',
					'cursor': 'pointer',
					'backgroundColor': 'red',
					'color': 'white',
					'border': 'none',
				}}
			>
				Return To Palette Page
			</button>
			
		</div>
	);
};
