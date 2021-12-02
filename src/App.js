import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { saveAs } from "file-saver";
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          { /* <img src={logo} className="App-logo" alt="logo" />  */ }
          <p>
            Protagonist Studios Download Portal
          </p>
          <button className="DefButton" onClick={ () => downloadWindows()}>Cyball Windows (zip)</button><br />
          <button className="DefButton" onClick={ () => downloadAndroid()}>Cyball Android (zip)</button>
        </header>
      </div>
    );
  }
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'download';
  const clickHandler = () => {
    setTimeout(() => {
      URL.revokeObjectURL(url);
      a.removeEventListener('click', clickHandler);
    }, 150);
  };
  a.addEventListener('click', clickHandler, false);
  a.click();
  return a;
}

// usage
async function downloadAndroid() {
  const result = await Storage.get(`Cyball-Android-debug.zip`, { download: true }, { contentType: "application/zip"});
  downloadBlob(result.Body, 'Cyball-Android-debug.zip');
}

async function downloadWindows() {
  const result = await Storage.get(`Cyball-Windows-debug.zip`, { download: true }, { contentType: "application/zip"});
  downloadBlob(result.Body, 'Cyball-Windows-debug.zip');
}

export default withAuthenticator(App);
