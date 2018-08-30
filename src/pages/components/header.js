import React, { Component } from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { withRouter } from 'react-router';

class Header extends Component {
  handleClick = () => {
    const {
      history: {
        goBack,
      },
    } = this.props;
    goBack();
  }

  render() {
    return (
      <header className="Header">
        <img src={logo} width={250}/>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="is-selected">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink to="/v" activeClassName="is-selected">
                Redirect
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
            </li>
            <li>
              <a onClick={this.handleClick}>
                👈🏻
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header);
