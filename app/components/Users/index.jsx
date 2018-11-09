import React, { Component } from 'react';
import moment from 'moment';

import Vertical from '../../styling/Vertical';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('api/users')
      .then(res => res.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    const { users } = this.state;
    return (
      <Vertical>
        <div className="container card w-auto shadow bg-light">
          <div className="d-flex align-items-center">
            <div className="row justify-content-center card-body">
              <table className="table table-striped table-bordered table-hover table-sm">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Password</th>
                    <th>Created on</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(x => (
                    <tr key={x._id}>
                      <td>{x.email}</td>
                      <td>{x.phone}</td>
                      <td>{x.firstName}</td>
                      <td>{x.lastName}</td>
                      <td>{x.password}</td>
                      <td>{moment.utc(x.date).local().format('YYYY-MM-DD hh:mm A')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default Users;
