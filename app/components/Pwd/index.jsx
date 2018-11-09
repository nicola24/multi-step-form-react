import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Vertical from '../../styling/Vertical';

class Pwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      user: [],
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.onSubmitPwd = this.onSubmitPwd.bind(this);
  }

  onSubmitPwd(e) {
    const { password } = this.state;
    const { email } = this.props.location.state;
    // location prop to access the state from component SignIn (React-Router)

    fetch(`/api/email/pwd/${email}/${password}`)
      .then(res => res.json())
      .then(data => this.setState({ user: data }));

    e.preventDefault();
  }

  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { user } = this.state;
    const { email } = this.props.location.state;

    return (
      <Vertical>
        <div className="container card w-50 shadow bg-light">
          <div className="d-flex align-items-center" style={{ height: 300 }}>
            <div className="row justify-content-center card-body">
              <form onSubmit={this.onSubmitPwd}>
                <h4>{`Welcome back, ${email}`}</h4>
                <div className="form-inline">
                  <input
                    type="text"
                    placeholder="password"
                    name="password"
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input type="submit" value="Next" className="btn btn-primary m-2 pl-5 pr-5" />
                </div>
                {user.length === 0 ? null : (
                  user[0] === 'wrongPW' ? (
                    <p className="font-weight-light text-danger">Wrong Password</p>
                  ) : (
                    <Redirect
                      to={{
                        pathname: '/login',
                        state: { email: user[0].email },
                      }}
                    />
                  )
                )}
              </form>
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default Pwd;
