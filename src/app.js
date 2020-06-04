import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'video.js/dist/video-js.css';
import configureStore from './store/configureStore';
const store = configureStore();

const jsx=(
  <Provider store = {store}>
  <AppRouter/>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
