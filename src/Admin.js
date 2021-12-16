import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// import { Button, ButtonGroup } from '@aws-amplify/ui-react';
// import { AmplifyProvider } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

reactDOM.render(
  <h1>Click here to build Cyball</h1>,
  document.getElementById('root')
);

