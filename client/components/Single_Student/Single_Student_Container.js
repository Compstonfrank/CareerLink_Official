import Single_Student from './Single_Student';
import { connect } from 'react-redux';
import {fetchStudent} from '../../reducers/student'



const mapStateToProps = state => {
  return {
    student: state.StudentReducer.student
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleStudent: () => {
      const studentId = ownProps.match.params.studentId
      const thunk = fetchStudent(studentId)
      dispatch(thunk)
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single_Student);
