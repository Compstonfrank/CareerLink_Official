import { connect } from 'react-redux';
import All_Students from './All_Students';
import { fetchStudents } from '../../reducers/student';

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents())
  };
};

const mapStateToProps = state => {
  return {
    students: state.StudentReducer.students
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All_Students);
