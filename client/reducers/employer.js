import Axios from 'axios';

//still needs 'write' actions and 'write' reducer cases

//actions
const GET_EMPLOYER = 'GET_EMPLOYER';
const GET_EMPLOYERS = 'GET_EMPLOYERS';
const MAKE_EMPLOYER = 'MAKE_EMPLOYER';
const DELETE_EMPLOYER = 'DELETE_EMPLOYER';
const UPDATE_EMPLOYER = 'UPDATE_EMPLOYER';

//action creators
const getEmployer = employer => {
  return {
    type: GET_EMPLOYER,
    employer
  };
};

const getEmployers = employers => {
  return {
    type: GET_EMPLOYERS,
    employers
  };
};

const makeEmployer = employer => {
  return {
    type: MAKE_EMPLOYER,
    employer
  };
};

const deleteEmployer = employer => {
  return {
    type: DELETE_EMPLOYER,
    employer
  };
};

const updateEmployer = employer => {
  return {
    type: UPDATE_EMPLOYER,
    employer
  };
};

//thunks
export const fetchEmployer = id => {
  return async dispatch => {
    const response = await Axios.get(`/api/employer/${id}`);
    const employer = response.data;
    dispatch(getEmployer(employer));
  };
};

export const fetchEmployers = () => {
  return async dispatch => {
    const response = await Axios.get('/api/employer');
    const employers = response.data;
    dispatch(getEmployers(employers));
  };
};

export const putEmployer = updatedEmployerInfo => {
  return async dispatch => {
    const response = await Axios.put(
      `/api/employer/${updatedEmployerInfo.id}`,
      updatedEmployerInfo
    );
    const updatedEmployer = response.data;
    dispatch(updateEmployer(updatedEmployer));
  };
};

export const postEmployer = newEmployer => {
  return async dispatch => {
    const response = await Axios.post('/api/employer', newEmployer);
    const employer = response.data;
    dispatch(makeEmployer(employer));
  };
};

export const destroyEmployer = employerId => {
  return async dispatch => {
    const response = await Axios.delete(`/api/employer/${employerId}`);
    const deletedEmployer = response.data;
    dispatch(deleteEmployer(deletedEmployer));
  };
};

//initial state
const initialState = {
  employers: [],
  employer: {}
};

/*eslint-disable */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYER:
      return { ...state, employer: { ...action.employer } };
    case GET_EMPLOYERS:
      return { ...state, employers: [...action.employers] };
    case MAKE_EMPLOYER:
      const employersCopy1 = [...state.employers];
      employersCopy.push(action.employer);
      return { ...state, employers: employersCopy1 };
    case DELETE_EMPLOYER:
      let employersCopy2 = [...state.employers];
      const deleteIndex = employersCopy2.findIndex(
        employer => employer.id === action.employer.id
      );
      employersCopy2.splice(deleteIndex, 1);
      return { ...state, employers: [...employersCopy2] };
    case UPDATE_EMPLOYER:
      const employersCopy3 = [...state.employers];
      const updateIndex = employersCopy3.findIndex(
        employer => employer.id === action.employer.id
      );
      employersCopy3.splice(updateIndex, 1);
      employersCopy3.splice(updatedIndex, 0, action.employer);
      return { ...state, employers: [...employersCopy3] };
    default:
      return state;
  }
};
/*eslint-enable */

export default reducer;
