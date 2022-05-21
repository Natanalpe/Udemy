import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Header from '../components/template/Header'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'
import Nav from '../components/template/Nav'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Header icon="home" title="início"
                subtitle="Segundo projeto do capítulo de React." />
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>