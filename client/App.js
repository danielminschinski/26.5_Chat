import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import io from 'socket.io-client';

const socket = io('/');

class App extends Component {

};

export default hot(module)(App);