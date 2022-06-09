import React from 'react'

const Header = ({ userName, navLinks }) => {
    return (
        <div className="wf-header-wrapper">
            <div className="wf-header-nav-wrapper">
                <ul className="wf-header-nav-links">
                    {navLinks.map(({id, href, label}) => {
                        return (
                            <li className="wf-header-nav-link" key={id}>
                                <a key={id} href={href}>{label}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="wf-header-header-right">
                <h2>Hello {userName}!</h2>
            </div>
        </div>
    )
}

export default Header;