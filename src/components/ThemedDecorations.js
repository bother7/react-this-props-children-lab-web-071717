// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class ThemedDecoration extends React.Component {
  render() {
    return (<div>{this.props.children.map((prop) => {return (<p className={this.props.theme}> prop </p>)})}

      </div>);
  }
}
