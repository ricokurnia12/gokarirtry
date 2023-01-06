import React from "react";
import logonavbar from "./Assets/Logo go.svg";

const Navbar = () => {
    return (
        <nav className="navbar bg-danger">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img
                        src={logonavbar}
                        alt="Bootstrap"
                        width={158}
                        height={48}
                    />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
