import React, { Component } from 'react';
import Phone from './PhoneActive';
import { connect } from 'react-redux';
import { loadPhone } from '../actions'

class PhoneList extends Component {

  componentDidMount() {
    this.props.loadPhoneFormMap();
  }

  render() {
    const nodes = this.props.stateFromMaps.map((item, index) => {
      return (
        <Phone
          key={index}
          index={index}
          phone={item.PhoneNumber}
          Name={item.Name}
          added={item.added}
          id={item.id}
        />)
    })
    return (
      <div>
      <table className="table table-striped table-light centering  table-hover">
        <thead>
          <tr className='table-secondary'>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {nodes}
        </tbody>
      </table>
      
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stateFromMaps: state.phones
  //word users taken from reducer/index.js
  // export default combineReducers({
  //   phones
  // })

})

const mapDispatchToProps = (dispatch) => ({
  loadPhoneFormMap: () => dispatch(loadPhone())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList)
