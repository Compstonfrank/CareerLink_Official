import { connect } from 'react-redux';
import All_Students from './All_Students';
import { fetchStudents } from '../../reducers/student';

const mapStateToProps = state => {
  return {
    students: state.StudentReducer.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All_Students);
