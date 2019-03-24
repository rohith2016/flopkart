import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import logo from '../logo.svg';


export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-info navbar-dark px-sm-5">
                <Link>
                    <img src={logo} alt="logo" className="navbar-brand"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        My Cart
                    </span>
                </Link>
            </nav>
        );
    }
}

// const ButtonContainer = styled.button'
// text-tranform:capitalize;
// ';