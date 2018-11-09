import React, { Component } from 'react';

import Vertical from '../../styling/Vertical';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const { email } = this.props.location.state;

    fetch(`api/login/${email}`)
      .then(res => res.json())
      .then(data => this.setState({ user: data }));
  }

  render() {
    const { user } = this.state;

    return (
      <Vertical>
        <div className="container card w-50 shadow bg-light">
          <h3 className="pt-5 pl-5">User logged in:</h3>
          <div className="d-flex align-items-center" style={{ height: 300 }}>
            <div className="row justify-content-center card-body">
              <ul>
                <li>
                  <h4 className="font-weight-normal text-secondary">
                    {`First name: ${user.firstName}`}
                  </h4>
                </li>
                <li>
                  <h4 className="font-weight-normal text-secondary">
                    {`Last name: ${user.lastName}`}
                  </h4>
                </li>
                <li>
                  <h4 className="font-weight-normal text-secondary">
                    {`Email: ${user.email}`}
                  </h4>
                </li>
                <li>
                  <h4 className="font-weight-normal text-secondary">
                    {`Phone: ${user.phone}`}
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default User;
