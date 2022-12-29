import React, { Component } from "react";
import NavBarC from "./NavBarCus";
import Footer from "./footer";

import image from "../images/Customer_Home.jpg";

export default class HomeA extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div
                    className="jumbotron"
                    style={{
                        paddingLeft: "50px",
                        paddingRight: "50px",
                        paddingTop: "10px",
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "600px",
                    }}
                >
                    <br />
                    <NavBarC />
                    <div>
                        <div
                            className="jumbotron"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.7)",
                                marginTop: "100px",
                                marginBottom: "100px",
                            }}
                        >
                            <br />
                            <h1
                                style={{
                                    textAlign: "center",
                                    fontFamily: "monospace",
                                    fontSize: "90px",
                                    color: "black",
                                    fontWeight: "500",
                                }}
                            >
                                Welcome to Procurement Management System
                            </h1>
                        </div>
                    </div>
                </div>
                <div
                    className="jumbotron"
                    style={{
                        backgroundColor: "rgba(255,255,255,0.8)",
                        padding: "50px 10px 50px 10px",
                    }}
                >
                    <div className="container">
                        <div style={{ textAlign: "center" }}>
                            <h1
                                style={{
                                    fontFamily: "Bonheur Royale",
                                    fontSize: "70px",
                                    fontWeight: "600",
                                }}
                            >
                                P M S
                            </h1>
                            <h2>SRI LANKA</h2>
                            <br />
                            <br />
                            <p style={{ fontSize: "18px" }}>
                                <i>
                                    Procurement management is also referred to
                                    as the source-to-settle process. It
                                    encompasses the evaluation, selection, and
                                    creation of formal contractual agreements as
                                    well as managing the company’s ongoing
                                    supplier relationships. <br />
                                    Procurement is a complex discipline spanning
                                    many interrelated activities. The
                                    procurement management process includes the
                                    transactional purchasing of goods and
                                    services, and integrates with accounts
                                    payable to complete the source-to-settle
                                    cycle by providing supporting documents to
                                    help with the processing of supplier
                                    invoices for payment. <br />
                                    <br />
                                    <br />
                                </i>
                            </p>
                        </div>

                        <br />
                        <br />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
