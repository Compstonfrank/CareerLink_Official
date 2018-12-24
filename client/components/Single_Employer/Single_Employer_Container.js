/* eslint-disable camelcase */

import Single_Employer from './Single_Employer';
import { connect } from 'react-redux';
import { fetchEmployer } from '../../reducers/employer'

const mapStateToProps = state => {
    return {
        employer: state.EmployerReducer.employer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchSingleEmployer: () => {
            const employerId = ownProps.match.params.employerId
            const thunk = fetchEmployer(employerId)
            dispatch(thunk)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Single_Employer)
