import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Kekambas</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Kekambas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                    </ul>
                    {this.props.isLoggedIn ? (<div>Logout</div>) : (
                    <form onSubmit={(e) => this.props.handleLogin(e)} className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Username" name='username' />
                        <input className="form-control me-2" type="password" placeholder="Password" name='password'/>
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </form>
                    )}
                    
                    </div>
                </div>
            </nav>
        )
    }
}
