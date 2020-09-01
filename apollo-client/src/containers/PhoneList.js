import React, { Component } from 'react';
import User from './UserActive';
import { connect } from 'react-redux';
import { loadPhone } from '../actions'

class PhoneList extends Component {

  componentDidMount() {
    this.props.loadPhoneFormMap();
  }

  render() {
    const nodes = this.props.stateFromMaps.map((item, index) => {
      console.log(index)
      return (
        <User
          key={index}
          index={index}
          phone={item.PhoneNumber}
          Name={item.Name}
          added={item.added}
          id={item.id}
        />)
    })
    return (
      <table className="table table-striped table-dark">
        <thead>
          <tr>
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
