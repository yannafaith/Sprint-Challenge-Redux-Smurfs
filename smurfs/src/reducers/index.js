import {GET_SUCCESS, GET_FAILURE, POST_SUCCESS, POST_FAILURE, DELETE_FAILURE, DELETE_SUCCESS} from '../actions';

const initialState = {
   smurfs: [],
   gettingSmurfs: false,
   addingSmurf: false,
   deletingSmurf: false,
   error: null
 };

 const rootReducer = (state = initialState, action) => {
   switch(action.type) {
     case GET_SUCCESS: 
       return {
         ...state, 
         error: '', gettingSmurfs: true, smurfs: action.payload
        };
      case POST_SUCCESS: 
        return {
          ...state, 
          error: '', 
          addingSmurf: true,
          smurfs: action.payload
        };
      case POST_FAILURE:
        return {
          ...state, 
          error: action.payload,
          addingSmurf: false
        };
        case GET_FAILURE:
        return {
          ...state, 
          error: action.payload,
          addingSmurf: false
        };
        case DELETE_FAILURE:
        return {
          ...state, 
          error: action.payload,
          deletingSmurf: false
        };
        case DELETE_SUCCESS:
        return {
          ...state, 
          error: '',
          smurfs: action.payload,
          deletingSmurf: true
        };
        default: return state;
      };
    };

 export default rootReducer;
