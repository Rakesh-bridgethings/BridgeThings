import React, { Fragment } from 'react';
import './App.css';
import './assets/base.css';
import './assets/style.css';
import Main from './components/config/route';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider store={store}>
        <Main />
        </Provider>
    );
  }
}

export default App;
