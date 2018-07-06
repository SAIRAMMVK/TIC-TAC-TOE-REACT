import React, { Component } from 'react';
import MessageList from './Components/messagelist';
import Header from './Components/header';
import firebase from './';
import './App.css';

class App extends Component {
  constructor(){
    super();

  var config = {
    apiKey: "AIzaSyDNx-QJ0XBxBIv-BPaf1gTHlStnKwkI08k",
    authDomain: "messaging-application-e36c8.firebaseapp.com",
    databaseURL: "https://messaging-application-e36c8.firebaseio.com",
    projectId: "messaging-application-e36c8",
    storageBucket: "messaging-application-e36c8.appspot.com",
    messagingSenderId: "362472931757"
  };
  firebase.initializeApp(config);

  }
  render() {
    return (
      <div className="container">
        
        <Header title="Simple Messaging Application"/>
        <MessageList/>
      </div>
    );
  }
}

export default App;
