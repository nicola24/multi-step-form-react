import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Vertical from '../../styling/Vertical';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      email: '',
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { id } = this.state;

    fetch(`/api/emailorphone/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ email: data.email }));

    e.preventDefault();
  }

  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email } = this.state;
    return (
      <Vertical>
        <div className="container card w-50 shadow bg-light">
          <div className="d-flex align-items-center" style={{ height: 300 }}>
            <div className="row justify-content-center card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-inline">
                  <input
                    type="text"
                    placeholder="Email or phone"
                    name="id"
                    onChange={this.handleEvent}
                    required
                    className="form-control m-2"
                  />
                  <input type="submit" value="Next" className="btn btn-primary m-2 pl-5 pr-5" />
                </div>
                {email.length <= 0 ? null : (
                  email === 'noUser' ? (
                    <p className="font-weight-light text-danger">{'Couldn\'t find your account'}</p>
                  ) : (
                    <Redirect
                      to={{
                        pathname: '/signin/identifier/pwd',
                        state: { email },
                      }}
                    />
                  )
                )}
                <Link to="/signup/createaccount">No account? Create one!</Link>
              </form>
            </div>
          </div>
        </div>
      </Vertical>
    );
  }
}

export default SignIn;
