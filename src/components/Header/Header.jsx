import React from "react";
import Me from "../../assets/header/Me.png";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img src={Me} alt="me" />
            <div className="content">
                <span className="info">A Designer who</span>
                <h1>
                    MAhmoud Ahmed
                    <br /> by its <span className="cover">cover</span>
                </h1>
                <span>
                    Because if the cover does not impress you what else can?
                </span>
            </div>
        </header>
    );
}

export default Header;
