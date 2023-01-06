import React from "react";
import "./Footer.css";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            {/* FOOTER */}
            <footer className="footer py-4 w-100 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1">
                                Kantor Pusat Bandung
                            </h5>
                            <p className="reguler text-muted">
                                Jl. Purnawarman No. 36B
                            </p>
                            <b>
                                <IoIosCall />
                                123456
                            </b><br></br>
                            <b>
                                <IoIosCall />
                                123456
                            </b>
                            <p className="small text-muted mb-0">
                                © Copyrights. All rights reserved.{" "}
                                <a
                                    className="text-primary"
                                    href="https://ganeshaoperation.com/"
                                >
                                    Ganesha Operation
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">
                                Quick links
                            </h5>
                            <ul className="list-unstyled text-muted">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Get started</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-white mb-3">
                                Quick links
                            </h5>
                            <ul className="list-unstyled text-muted">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Get started</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-white mb-3">
                                Newsletter
                            </h5>
                            <p className="small text-muted">
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt.
                            </p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <button
                                        className="btn btn-primary"
                                        id="button-addon2"
                                        type="button"
                                    >
                                        <i className="fas fa-paper-plane" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
