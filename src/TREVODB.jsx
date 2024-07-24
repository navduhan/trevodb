import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { env } from './env';

import { TNavbar } from './components/Navbar/TNavbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import ViewTree from './pages/Tree/Tree';
import Login from './pages/Login/Login';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export class TREVODB extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseUrlLen: env.BASE_URL.split('/').length
        }
    }

    render(){
        return(
			<Router>
			<Container fluid className='App px-4'>
			<TNavbar active={document.location.pathname.split('/')[this.state.baseUrlLen]}/>
		   <Routes>
			   <Route path={`${env.BASE_URL}/`} element={<Home />} />
         
                <Route path={`${env.BASE_URL}/search`}  element={<Search />} />
                <Route path={`${env.BASE_URL}/tree`}  element={<ViewTree/>} />
                <Route path={`${env.BASE_URL}/login`}  element={<Login/>} />
           
                    
                    
           
                
                    
            </Routes>
         <Footer />
            </Container>
            </Router>
        )

    }

}