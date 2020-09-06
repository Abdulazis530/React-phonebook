import { connect } from 'react-redux'
import { deletePhone, resendPhone, clickEditAct } from '../actions'
import Phone from '../components/Phone'
const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deletePhone(ownProps.id)),
  resend: () => dispatch(resendPhone(ownProps.phone, ownProps.Name, ownProps.id)),
  onEdit: () => dispatch(clickEditAct(ownProps.id))
})

export default connect(
  null,
  mapDispatchToProps
)(Phone)
