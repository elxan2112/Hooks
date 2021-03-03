const defaultState = {
    data: ''
};

const reducer = (state=defaultState, action) => {
    switch(action.type){
        case 'FIRST_ACTION':
            return {
                ...state,
                data: action.payload
            };
        default: 
            return state;
    };
};

export default reducer;


const kakayataFunkciya = () => ({})