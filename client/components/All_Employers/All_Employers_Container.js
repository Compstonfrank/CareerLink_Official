import { connect } from 'react-redux';
import All_Employers from './All_Employers';
import { fetchEmployers } from '../../reducers/employer';

const mapStateToProps = state => {
  return {
    employers: state.EmployerReducer.employers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployers: () => dispatch(fetchEmployers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All_Employers);
