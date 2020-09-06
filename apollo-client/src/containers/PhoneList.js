import React, { Component } from 'react';
import Phone from './PhoneActive';
import EditForm from './EditForm'
import { connect } from 'react-redux';
import { loadPhone } from '../actions'

class PhoneList extends Component {
  componentDidMount() {
    this.props.loadPhoneFormMap();
  }


  render() {
    const nodes = this.props.stateFromMaps.phones.map((item, index) => {
      return item.isEdit ?
        (
          <EditForm
            key={index}
            index={this.props.stateFromMaps.offset + index + 1}
            phone={item.PhoneNumber}
            Name={item.Name}
            added={item.added}
            id={item.id}
            edit={item.isEdit}
          />)
        :
        (
          <Phone
            key={index}
            index={this.props.stateFromMaps.offset + index + 1}
            phone={item.PhoneNumber}
            Name={item.Name}
            added={item.added}
            id={item.id}
            edit={item.isEdit}
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

const mapStateToProps = ({ phones }) => ({ stateFromMaps: phones })
const mapDispatchToProps = (dispatch) => ({ loadPhoneFormMap: () => dispatch(loadPhone()) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList)
