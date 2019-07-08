import React, {Component} from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    // if(this.props.authenticated){
    //   this.setState({
    //     loading: false
    //   });
    // }
  }


  render() {

    return (
      <div>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About Kofa</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
