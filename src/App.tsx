import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Router from './routes';
import { store } from './redux/store';
import ThemeProvider from './themes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
