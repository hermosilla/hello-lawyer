import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Authentication</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);