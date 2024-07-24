import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { env } from "../../env";
import './TNavbar.scss';
import '../../scss/style.scss';
// import lablogo from './lablogo.png';
// import usulogo from './dblogo.png';
import dblogo from './dblogo.png';

class TNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
    this.activeLink = this.activeLink.bind(this);
  }

  activeLink(link) {
    
    
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

    render() {
        let className = 'mx-1'
        let active = 'mx-1 current'
        console.log(env.BASE_URL)
return(
  <div className="container contain">
  <div className="row flex-lg-row align-items-center g-2 mt-2">

    <div className="col-md-2 imglab">
  
    </div>
    <div className="col-md-2">
    <img src={dblogo} height={50} alt=''></img>

    </div>
    <div className=" col-md-6 mt-2 nav-wrapper mx-auto">
        <Navbar className="justify-content-center">
          
          <Nav className="">
            <Nav.Link href= {`${env.BASE_URL}/`} className={'/' === this.props.active ? active : className}>
              Home
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/search`} className={'search' === this.props.active ? active : className}>
             Search
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/datasets`} className={'datasets' === this.props.active ? active : className}>
              Datasets
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/help`} className={'help' === this.props.active ? active : className}>
              Help
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/contact`} className={'contact' === this.props.active ? active : className}>
              Contact
            </Nav.Link>
          </Nav>

        </Navbar>
      </div>
      <div className="col-md-2">
     
    </div>
    </div>
    
      </div>

)

    }
}
export {TNavbar};