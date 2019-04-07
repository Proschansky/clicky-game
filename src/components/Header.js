import React, { Component } from 'react';

export default class Header extends Component {
    render() {
      return (
        <div>
          <div className="jumbotron bg-primary" role="alert">
              <h4 className="heading">Click-A-Cat</h4>
              <p>Click each image, but only once!</p>
          </div>
        </div>
      )
    }
  }