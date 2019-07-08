import React, { Component } from 'react';
import { Grid, Row, Col, Badge, ListGroup, ListGroupItem, Button, Carousel } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

class About extends Component {

    render() {
      // if(this.state.redirect === true) {
      //   return <Redirect to='/login' />
      // }
      return (
          <div className="About">
            <div>
              <h2>About Kofa</h2>
              Kofa is the best way to be rewarded for playing video games. No currency!!! Just play with friends and have the chance to win video games.
            </div>
          </div>
        );
    }
}

export default About;
