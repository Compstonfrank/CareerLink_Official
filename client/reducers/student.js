import Axios from 'axios';

//still needs 'write' actions and 'write' reducer cases

//actions
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';
const MAKE_STUDENT = 'MAKE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

//action creators

//gets a single student
const getStudent = student => {
  return {
    type: GET_STUDENT,
    student
  };
};

//gets all students
const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students
  };
};

//creates a new student
const makeStudent = student => {
  return {
    type: MAKE_STUDENT,
    student
  };
};

//deletes a student
const deleteStudent = student => {
  return {
    type: DELETE_STUDENT,
    student
  };
};

//updates an existing student
const updateStudent = student => {
  return {
    type: UPDATE_STUDENT,
    student
  };
};

//thunks
//This thunk will fetch the selected student from the server and will be passed to the selectedStudent action creator so he/she can be placed on the selectedStudent state.
export const fetchStudent = studentID => {
  return async dispatch => {
    const response = await Axios.get(`/api/student/${studentID}`);
    const student = response.data;
    dispatch(getStudent(student));
  };
};

//This thunk will fetch the existing students from the server and will be passed to the studentsFromServer action creator so they can be added to students array on state.
export const fetchStudents = () => {
  return async dispatch => {
    const response = await Axios.get('/api/student');
    const students = response.data;
    dispatch(getStudents(students));
  };
};

//This thunk will take the student id and the student info to update the selected student.
export const putStudent = updatedStudentInfo => {
  return async dispatch => {
    const response = await Axios.put(
      `/api/student/${updatedStudentInfo.id}`,
      updatedStudentInfo
    );
    const student = response.data;
    dispatch(updateStudent(student));
  };
};

//Post request for newly created student. This thunk creator will recieve a student instance which will be passed as the request body.
export const postStudent = newStudent => {
  return async dispatch => {
    const response = await Axios.post('/api/student', newStudent);
    const student = response.data;
    dispatch(makeStudent(student));
  };
};

//This thunk will fetch the selected student from the server and will be passed to the deletedStudent action creator. It will also need to be removed from the students array. In this case {data} will not return anything that we can use to update the state.
export const destroyStudent = studentId => {
  return async dispatch => {
    await Axios.delete(`/api/student/${studentId}`, studentId);
    dispatch(deleteStudent(studentId));
  };
};

//intitial state
const initialState = {
  students: [],
  student: {}
};

/*eslint-disable */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return { ...state, student: { ...action.student } };
    case GET_STUDENTS:
      return { ...state, students: [...action.students] };
    case MAKE_STUDENT:
      const studentsCopy1 = [...state.students];
      studentsCopy1.push(action.student);
      return { ...state, students: [...studentsCopy1] };
    case DELETE_STUDENT:
      const studentsCopy2 = [...state.students];
      const deleteIndex = studentsCopy2.findIndex(
        student => student.id === action.student.id
      );
      studentsCopy2.splice(deleteIndex, 1);
      return { ...state, students: [...studentsCopy2] };
    case UPDATE_STUDENT:
      const studentsCopy3 = [...state.students];
      const updateIndex = studentsCopy3.findIndex(
        student => student.id === action.student.id
      );
      studentsCopy3.splice(updateIndex, 1);
      studentsCopy3.splice(updatedIndex, 0, action.student);
      return { ...state, students: [...studentsCopy3] };
    default:
      return state;
  }
};
/*eslint-enable */

export default reducer;
