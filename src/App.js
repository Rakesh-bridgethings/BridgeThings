import React, { Fragment } from 'react';
import './App.css';
import './assets/base.css';
import './assets/style.css';

import { Provider } from 'react-redux';
import Header from './components/includes/Header/header';
import Footer from './components/includes/Header/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div style={{height: '80vh'}} ></div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
