import React, { Component } from 'react';
import { Grid, Row, Col, Badge, ListGroup, ListGroupItem, Button, Carousel } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

import PrizeCarousel from './PrizeCarousel';

class Dashboards extends Component {
    constructor(props) {
      super(props);

      this.state = {

      };
    }

    handleChange(e) {

    }

    componentDidMount(){

    }

    componentWillMount() {

    }
    componentWillUnmount() {

    }

    handleSubmit(e) {
      e.preventDefault();
      //on submit, set data in firebase equal to this new data
    }

    render() {
      // if(this.state.redirect === true) {
      //   return <Redirect to='/login' />
      // }
        return (
          <div className="Dashboard">
            <Row>
              <div className="WidgetItem">
                <h4>KoynCount</h4>
                <Badge>115</Badge>
              </div>
              <div className="WidgetItem">
                <h4>TotalMatchesCount</h4>
                <Badge>97</Badge>
              </div>
              <div className="WidgetItem">
                <h4>CurrentMatchesOpened</h4>
                <Badge>Start a match</Badge>
                <Badge>Upload game snapshot here</Badge>
              </div>
              <div className="WidgetItem">
                <h4>WinLoss</h4>
                <Badge>115</Badge>
              </div>
              <div className="WidgetItem">
                <h4>EditAccount</h4>
                <Badge>Edit email</Badge>
                <Badge>Edit password</Badge>
                <Badge>Edit address</Badge>
                <Badge>Edit payment info</Badge>
                <Badge>Edit preferred system</Badge>
              </div>
              <PrizeCarousel />
            </Row>
          </div>
        );
    }
}

export default Dashboards;
