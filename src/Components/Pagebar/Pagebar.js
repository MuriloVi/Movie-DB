import React from 'react';
import './Pagebar.css';


function Pagebar(props) {
    const links = []

    for (let i = 1; i <= props.total + 1; i++) {
        let onThisPage = props.current === i ? 'on' : 'off';
        links.push(<li id={`${onThisPage}`} className={`single-page ${onThisPage}`} key={i} onClick={() => {
            props.selectPage(i)
            window.scrollTo(0, 0)
        }
        }><p>{i}</p></li>)
    }
    return (
        <nav className="pagebar">
            <ul>
                {links}
            </ul>
        </nav>
    )
}

export default Pagebar;
