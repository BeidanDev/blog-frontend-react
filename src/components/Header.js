import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <Link
                className="navbar-brand"
                to="/"
            >
                Home
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/create-posts"
                    >
                        Create Posts
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}
