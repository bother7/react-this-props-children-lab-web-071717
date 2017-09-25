// Code Invitation Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class Invitation extends React.Component {
  render() {
    return (<div><h1>You've been invited!</h1>
    <p>{this.props.children}</p>
    </div>);
  }
}
