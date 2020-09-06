import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postPhone,TogleButtonCta } from '../actions'

class Addform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            PhoneNumber: ""
        }
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handlePhoneNumberChange(event) {
        this.setState({ PhoneNumber: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ Name: event.target.value });
    }

    handleClick(event){  
        event.preventDefault()
        this.props.togleButtonCta()
    } 

    handleSubmit(event) {
       
        if (this.state.PhoneNumber && this.state.Name) {
            this.props.postPhone(this.state.PhoneNumber, this.state.Name)
            this.setState({ PhoneNumber: "", Name: "" });
        }
        event.preventDefault();
    }

    render() {

        return (

            <div >
                <div className="card text-left" >
                    <div className="card-header text-center font-weight-bold">
                        ADD CONTACT
                     </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} className="form-inline justify-content-center">
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

                            <div className="form-group row align-self-center">
                                <div className="col-sm-12">
                                    <button type="button" className="btn btn-warning  btn-cancel float-right" onClick={this.handleClick}><i className="fas fa-ban"></i> Cancel </button>

                                    <button type="submit" className="btn btn-primary  btn-add float-right"> <i className="fas fa-plus"></i> Add</button>
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
    postPhone: (PhoneNumber, Name) => dispatch(postPhone(PhoneNumber, Name)),
    togleButtonCta: () => dispatch(TogleButtonCta()),
})

export default connect(
    null,
    mapDispatchToProps
)(Addform)
