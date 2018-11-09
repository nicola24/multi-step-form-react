import React from 'react';
import { Link } from 'react-router-dom';

import Vertical from '../../styling/Vertical';
import Admin from './Admin';

const HomePage = () => (
  <Vertical>
    <div className="container card w-50 shadow bg-light">
      <div className="d-flex align-items-center" style={{ height: 300 }}>
        <div className="row justify-content-center card-body">
          <Link className="btn btn-primary btn-lg m-2" to="/signup/createaccount">Create account</Link>
          <Link className="btn btn-outline-primary btn-lg m-2 pr-5 pl-5" to="/signin/identifier">Sign in</Link>
        </div>
      </div>
    </div>
    <Admin to="/users" className="btn btn-secondary btn-sm">Admin</Admin>
  </Vertical>
);

export default HomePage;
