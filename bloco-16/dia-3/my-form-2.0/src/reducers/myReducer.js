const INITIAL_STATE = {
    name: '',
    };
    
    function myReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'NEW_ACTION':
          return { name: action.state };
        default:
          return state;
      }
    }
    
    export default myReducer;