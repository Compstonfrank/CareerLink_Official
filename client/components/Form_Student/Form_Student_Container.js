import Form_Student from './Form_Student';
import { connect } from 'react-redux';
import {postStudent} from '../../reducers/student'


const mapStateToProps = state => {
  return {
    student: state.StudentReducer.student
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postStudent: (obj) => {
      let thunk = postStudent(obj)
      dispatch(thunk)
    }
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form_Student);
