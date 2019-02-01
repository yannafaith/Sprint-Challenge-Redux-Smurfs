import {GET_SUCCESS, GET_FAILURE, POST_SUCCESS, POST_FAILURE} from '../actions';

const initialState = {
   smurfs: [],
   gettingSmurfs: false,
   addingSmurf: false,
   // updatingSmurf: false,
   // deletingSmurf: false,
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
        default: return state;
      };
    };


 export default rootReducer;
