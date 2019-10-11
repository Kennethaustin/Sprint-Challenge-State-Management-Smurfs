import axios from 'axios';
export const FETCH_SMURF_START = ' FETCH_SMURF_START'; 
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'; 
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'; 

export const fetchSmurfs = (smurf) => dispatch => {
    dispatch({type: FETCH_SMURF_START});
    axios
        .get ('http://localhost:3333/smurfs',smurf)
        .then (res =>{
            dispatch({
                type: FETCH_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({ type: FETCH_SMURF_FAILURE, payload: err }))
};
export const addingSmurfs = (smurf) => dispatch => {
    dispatch ({type:ADD_SMURF_START});
    return axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        dispatch({
            type:ADD_SMURF_SUCCESS,
            payload:res.data
        })
    },true)
.catch(err => dispatch({type:ADD_SMURF_FAILURE, payload:err}))
};