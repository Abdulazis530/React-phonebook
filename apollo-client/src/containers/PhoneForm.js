import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPhone } from '../actions'

class PhoneForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: "",
      PhoneNumber: ""
    }
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePhoneNumberChange(event) {
    this.setState({ PhoneNumber: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ Name: event.target.value });
  }

  handleSubmit(event) {
    const id = Date.now()
    if (this.state.PhoneNumber && this.state.Name) {
      this.props.postPhone(this.state.PhoneNumber, this.state.Name, id)
      this.setState({ PhoneNumber: "", Name: "" });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <div className="card text-left" >
          <div className="card-header text-center font-weight-bold">
            ADD CONTACT
          </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit} >
            <div className="form-group row">
              <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={this.state.PhoneNumber} onChange={this.handlePhoneNumberChange} placeholder="Phone Number" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Name" />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary float-left">Tambah</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card text-left" >
          <div className="card-header text-center font-weight-bold">
            SEARCH CONTACT
          </div>
        <div className="card-body">
          <form className="form-inline justify-content-center">
            <div className="form-group row">
              <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Number</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={this.state.PhoneNumber} onChange={this.handlePhoneNumberChange} placeholder="Phone Number" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Name" />
              </div>
            </div>

          </form>
        </div>
      </div>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => ({
  postPhone: (phoneNumber, Name, id) => dispatch(postPhone(phoneNumber, Name, id))
})

export default connect(
  null,
  mapDispatchToProps
)(PhoneForm)
