import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory  } from 'react-router';
import routes from './routes/index.jsx';
import 'bootstrap/dist/css/bootstrap.css';

let root = document.getElementById('app');
//使用browserHistory的时候，webpack启动时要加一个参数：--history-api-fallback
//webpack-dev-server --history-api-fall-back
ReactDOM.render(
  <Router routes={routes} history={browserHistory} />, root
);
