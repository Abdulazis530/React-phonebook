import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';

import AddForm from '../containers/AddForm';
import SearchForm from '../containers/SearchForm';
import Jumbotron from './Jumbotron';
import Pagination from '../containers/Pagination';

export default class UserBox extends Component {
  render() {
    return (
      <div>
      <Jumbotron/>
      <div className="container">
        <div className="card main-container">

          <div className="card-body" >
            <AddForm />
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
