import React, { useContext } from "react";
import "./navbar.css";
import "../globalStyles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext.js";

export default function Navigationbar(){
    const { user } = useContext(UserContext); 

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        marginLeft: '10px',
        display: 'block',
        fontFamily: 'Lato',
    };
    
    return(
        <>
            <Navbar bg="light" expand="sm" style={{ paddingLeft:"1rem", paddingRight:"1rem" }}>
            <Link to="/" style={{ textDecoration: 'none' }}><Navbar.Brand className="logo">CLOTHES SHOP</Navbar.Brand></Link>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">

                        <NavDropdown className="menu-item" to="/products" title="Women">
                             <Link to="/productoverview" state= {{ category: "women", type: "tops" }} style={ linkStyle } >
                                <p>Tops</p>
                            </Link>

                            <Link to="/productoverview" state= {{ category: "women", type: "bottoms" }} style={ linkStyle }>
                                <p>Bottoms</p>
                            </Link>

                        </NavDropdown>

                        <NavDropdown className="menu-item" href="products" title="Men">
                            <Link to="/productoverview" state= {{ category: "men", type: "tops" }} style={ linkStyle }>
                                <p>Tops</p>
                            </Link>
                            
                            <Link to="/productoverview" state= {{ category: "men", type: "bottoms" }} style={ linkStyle }>
                                <p>Bottoms</p>
                            </Link>
                        </NavDropdown>
                    </Nav>        

                    <Nav>
                        <Nav.Link as={ Link } to="/login"><div>{ user.auth === true && (<p>Hi {user.name}</p>) }</div></Nav.Link>
                        <Nav.Link as={ Link } to="/login"><FaUser/></Nav.Link>
                        <Nav.Link as={ Link } to="/basket"><FaShoppingCart/></Nav.Link>
                    </Nav>     
                </Navbar.Collapse>
            </Navbar>

            <div className="line"></div>
        </>
        
    )
}