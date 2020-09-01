import { connect } from 'react-redux'
import { deletePhone, resendPhone } from '../actions'
import Phone from '../components/Phone'
const mapDispatchToProps = (dispatch, ownProps) => {
 

  return {
    onDelete: () => dispatch(deletePhone(ownProps.id)),
    resend: () => dispatch(resendPhone(ownProps.phone, ownProps.Name, ownProps.id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Phone)
