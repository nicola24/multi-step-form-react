import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/Router';

const MOUNT_NODE = document.getElementById('app');

render(<App />, MOUNT_NODE);
