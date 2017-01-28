function fetchPalettes() {
	return {
		type: 'FETCH',
	};
}

function fetchSuccess(palettes) {
	return {
		type: 'FETCH_SUCCESS',
		palettes,
	};
}

function fetchFailure() {
	return {
		type: 'FETCH_FAILURE',
	};
}

export function fetchSavedPalettes() {
	return dispatch => {
		dispatch( fetchPalettes() );
		
		return fetch('/api/palette').then(
			res => res.json()
		).then(
			json => dispatch( fetchSuccess(json) )
		).catch(
			err => dispatch( fetchFailure() )
		);
	};
}

function createPalette() {
	return {
		type: 'CREATE',
	};
}

function createSuccess(newPalette) {
	return {
		type: 'CREATE_SUCCESS',
		newPalette,
	};
}

function createFailure() {
	return {
		type: 'CREATE_FAILURE',
	};
}

export function saveNewPalette() {
	return (dispatch, getState) => {
		dispatch(createPalette());
		
		let state = getState(),
			palette = {
				colors: state.mainPalette.colors,
				title: state.mainPalette.activeTitle,
			};
			
		fetch('/api/palette', {
			method: 'POST',
			body: JSON.stringify(palette),
			headers: {
			  'Content-Type': 'application/json'
			},
		}).then(
			res => res.json()
		).then(json => {
			palette.id = json.id;
			dispatch( createSuccess(palette) );
		}).catch(
			err => dispatch( createFailure() )
		);
	}
}

function updatePalette() {
	return {
		type: 'UPDATE',
	};
}

function updateSuccess(palette) {
	return {
		type: 'UPDATE_SUCCESS',
		palette,
	};
}

function updateFailure() {
	return {
		type: 'UPDATE_FAILURE',
	};
}

export function updateCurrentPalette() {
	return (dispatch, getState) => {
		dispatch( updatePalette() );
		
		let state = getState(),
			id = state.mainPalette.activeId,
			palette = {
				colors: state.mainPalette.colors,
				title: state.mainPalette.activeTitle,
				id,
			};
			
		fetch(`/api/palette/${id}`, {
			method: 'PUT',
			body: JSON.stringify(palette),
			headers: {
			  'Content-Type': 'application/json'
			},
		}).then(
			() => dispatch( updateSuccess(palette) )
		).catch(
			err => dispatch( updateFailure() )
		);
	};
}