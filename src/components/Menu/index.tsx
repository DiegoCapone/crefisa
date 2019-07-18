import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebookSquare,
    faYoutubeSquare,
    faTwitterSquare,
    faLinkedin } from '@fortawesome/free-brands-svg-icons'



import './Menu.css'

import {Container, Nav, Ul, Li} from './styled'
import { Link } from 'react-router-dom'
import Logo from '../Logo/index'

const Menu = () => (
    <>
    <Container>
        <Nav>
            <Ul>
                <Li><Link className="Link" to="/">Home</Link></Li>
                <Li><Link className="Link" to="/Kyc">Kyc</Link></Li>
                <Li><Link className="Link" to="/VisaoGeral">Vião Geral</Link></Li>
            </Ul>
        </Nav>
        
        <Nav>
            <Ul>
                <Li><FontAwesomeIcon icon={faFacebookSquare} className="icon"  size="lg"/></Li>
                <Li><FontAwesomeIcon icon={faYoutubeSquare} className="icon" size="lg"/></Li>
                <Li><FontAwesomeIcon icon={faTwitterSquare} className="icon" size="lg"/></Li>
                <Li><FontAwesomeIcon icon={faLinkedin} className="icon" size="lg" /></Li>
            </Ul>
        </Nav>    
    </Container>
    <Logo />
    </>
)

export default Menu