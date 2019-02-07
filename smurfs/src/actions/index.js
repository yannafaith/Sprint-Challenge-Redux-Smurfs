import axios from 'axios';

export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';
export const DELETE_FAILURE = 'DELETE_FAILURE';
export const DELETE_SUCCESS = 'DELETE_FAILURE';

export const getAction = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: GET_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: GET_FAILURE, payload: err}));
};

export const postAction = smurf => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({type: POST_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: POST_FAILURE, payload: err}));
};

export const deleteAction  = smurf => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${smurf}`)
    .then(res => dispatch({type: DELETE_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: DELETE_FAILURE, payload: err}));
};