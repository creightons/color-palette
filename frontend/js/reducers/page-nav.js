let initialState = {
	activePage: 'PALETTE_PAGE',
};

const pageNav = (state = initialState, action) => {
	switch(action.type) {
		case 'LOAD_PALETTE_PAGE':
			return Object.assign({}, state, {
				activePage: 'PALETTE_PAGE',
			});
		
		case 'LOAD_SAVED_PAGE':
			return Object.assign({}, state, {
				activePage: 'SAVED_PAGE',
			});
			
		default:
			return state;
	}
};

module.exports = pageNav;
	