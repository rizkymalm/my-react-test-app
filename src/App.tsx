import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Router from './routes';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
