import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickCancelEditAct, editUpdatePhone } from '../actions'
class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = { Name: this.props.Name, PhoneNumber: this.props.phone }
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleCancel() {
    this.props.cancelEditContact()
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleSubmit(event) {
    this.props.updateContact(this.state.Name, this.state.PhoneNumber)
    event.preventDefault()
  }
  render() {
    return (
      <tr>
        <th scope="row">{this.props.index}</th>
        <td>
          <div className="form-row" onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" name="Name" value={this.state.Name} onChange={this.handleChange} required={true} />
          </div>
        </td>
        <td>
          <div className="form-row" onSubmit={this.handleSubmit}>
            <input type="text" className="form-control" name="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handleChange} required={true} />
          </div>
        </td>
        <td>
          <button type="submit" className="btn btn-outline-success mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.handleCancel}><i className="fas fa-times"></i> Cancel</button>
        </td>
      </tr>
    )
  }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  cancelEditContact: () => dispatch(clickCancelEditAct(ownProps.id)),
  updateContact: (Name, PhoneNumber) => dispatch(editUpdatePhone(PhoneNumber, ownProps.id, Name))
})

export default connect(
  null,
  mapDispatchToProps
)(EditForm)