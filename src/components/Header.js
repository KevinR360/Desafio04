import React from "react";

import avatar from "../assets/avatar.png";

function Header() {
  return (
    <header id="header">
      <div className="content">
        <strong>facebook</strong>
        <div className="info">
          <span>Meu Perfil</span>
          <img src={avatar} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
