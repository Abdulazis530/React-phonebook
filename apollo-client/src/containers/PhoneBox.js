import React, { Component } from 'react';
import PhoneList from './PhoneList';
import AddForm from './AddForm';
import SearchForm from './SearchForm';
import Jumbotron from './Jumbotron';
import Pagination from './Pagination';
import { connect } from 'react-redux';

class PhoneBox extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <div className="card main-container">
            <div className="card-body">
           {this.props.stateFromMaps && <AddForm />}
            </div>
            <div className="card-body">
              <SearchForm />
            </div>
            <div className="card-body">
              <PhoneList />
            </div>
            <div className="card-body">
              <Pagination />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ phones }) => {
  const {isActive}=phones
  return { stateFromMaps: isActive } 
}

export default connect(
  mapStateToProps
)(PhoneBox)