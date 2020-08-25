import React from 'react';
import './HeaderTop.css';
import { Link } from 'react-router-dom';


function HeaderTop() {
    return (
        <header className="header-box">
            <Link to="/">
                <div>
                    <h1>
                        Movies
                    </h1>
                </div>
            </Link>
        </header>
    )
}

export default HeaderTop;
