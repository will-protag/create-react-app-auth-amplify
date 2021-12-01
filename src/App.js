import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { saveAs } from "file-saver";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          { /* <img src={logo} className="App-logo" alt="logo" />  */ }
          <p>
            Welcome to the Protagonist Studios Download Portal!
          </p>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
