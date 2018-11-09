import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Vertical from '../../styling/Vertical';

class Phone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      submit: false,
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.onSubmitPhone = this.onSubmitPhone.bind(this);
  }

  onSubmitPhone(e) {
    const { phone } = this.state;
    const { user } = this.props.location.state;
    // location prop to access the state from component SignUp (React-Router)

    fetch('/api/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        phone,
      }),
    });

    this.setState({ submit: true });
    e.preventDefault();
  }

  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { submit } = this.state;
    const { user } = this.props.location.state;

    return (
      <Vertical>
        <div className="container card w-50 shadow bg-light">
          <div className="d-flex align-items-center" style={{ height: 300 }}>
            <div className="row justify-content-center card-body">
              <form onSubmit={this.onSubmitPhone}>
                <h4>{`${user.firstName}, welcome!`}</h4>
                <div className="form-inline">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input type="submit" value="Next" className="btn btn-primary m-2 pl-5 pr-5" />
                </div>
              </form>
              {!submit ? null : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { email: user.email },
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default Phone;
