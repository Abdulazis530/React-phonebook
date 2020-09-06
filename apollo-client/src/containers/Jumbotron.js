
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { TogleButtonCta } from '../actions'


class Jumbotron extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.togleButtonCta()
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-1">Phone Book.</h1>
                    <p className="lead">Put your contacts here for better contacts management</p>
                    <button type="submit" className="btn btn-lg btn-primary float-left" onClick={this.handleClick} name="button"> Add New Contact</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ phones }) => {
    const { isActive } = phones
    return { stateFromMaps: isActive }
}

const mapDispatchToProps = (dispatch) => ({ togleButtonCta: () => dispatch(TogleButtonCta())})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Jumbotron)
