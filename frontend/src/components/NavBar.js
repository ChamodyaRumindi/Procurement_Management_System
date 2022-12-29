import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    style={{ padding: "30px 30px 10px 20px" }}
                >
                    <div className="container-fluid">
                        <a
                            className="navbar-brand"
                            style={{ fontSize: "30px" }}
                            href="#"
                        >
                            PMS
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/AdminHome"
                                    >
                                        Management Home
                                    </a>
                                </li>
                                &nbsp;
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                                &nbsp;
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="/hres"
                                    >
                                        Requisitions{" "}
                                    </a>
                                </li>
                                &nbsp;
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="/allCustomer"
                                    >
                                        Employees
                                    </a>
                                </li>
                                &nbsp; &nbsp;
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="/supplierH"
                                    >
                                        Suppliers
                                    </a>
                                </li>
                                &nbsp;
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="/AllServices"
                                    >
                                        Procurement
                                    </a>
                                </li>
                                &nbsp; &nbsp;
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
