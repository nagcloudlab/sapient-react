import React from 'react';

function Navbar({title}) {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark bg-opacity-50">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{title}</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;