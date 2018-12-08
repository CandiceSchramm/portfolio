import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Candice Schramm
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;