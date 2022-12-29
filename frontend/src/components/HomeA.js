import React, { Component } from "react";
import NavBar from "./NavBar";
import image from "../images/admin1.jpg";

export default class HomeA extends Component {
    render() {
        return (
            <div>
                <div
                    className="jumbotron"
                    style={{
                        paddingLeft: "50px",
                        paddingRight: "50px",
                        paddingTop: "10px",
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "600px",
                    }}
                >
                    <br />
                    <NavBar />
                    <br />
                    <br />
                    <div
                        className="jumbotron"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.7)",
                            padding: "100px 10px 100px 10px",
                        }}
                    >
                        <div className="container">
                            <h1
                                style={{
                                    textAlign: "center",
                                    fontSize: "50px",
                                }}
                            >
                                Procurement Management System
                            </h1>
                        </div>
                    </div>
                </div>
                <div
                    className="jumbotron"
                    style={{
                        paddingTop: "50px",
                        paddingBottom: "50px",
                        backgroundColor: "white",
                        backgroundImage:
                            "linear-gradient(to bottom right, black, white",
                    }}
                >
                    <div class="container px-4">
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white">
                                    <div class="card" style={{ width: "auto" }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            class="card-img-top"
                                            alt="..."
                                            style={{ height: "300px" }}
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Procurement Requisitions
                                                Management
                                            </h5>
                                            <p class="card-text">
                                                All the procurement requisitions
                                                details
                                            </p>
                                            <a
                                                href="/hres"
                                                class="btn btn-dark"
                                            >
                                                Go to Procurement Requisitions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="p-3 border bg-white">
                                    <div class="card" style={{ width: "auto" }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                            class="card-img-top"
                                            alt="..."
                                            style={{ height: "300px" }}
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Procurement Management
                                            </h5>
                                            <p class="card-text">
                                                All the Account Management
                                                details
                                            </p>
                                            <a
                                                href="/AllServices"
                                                class="btn btn-dark"
                                            >
                                                Go to Procurement Management
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-white">
                                    <div class="card" style={{ width: "auto" }}>
                                        <img
                                            src="https://media.istockphoto.com/photos/successful-partnership-picture-id1365436662?b=1&k=20&m=1365436662&s=170667a&w=0&h=TTTy5tNN_VJEP6ZPpY1u5vo2L5fV7HxR4Oty-ofGBkc="
                                            alt="..."
                                            style={{ height: "300px" }}
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Employees Management
                                            </h5>
                                            <p class="card-text">
                                                All the Site Manager details
                                            </p>
                                            <a
                                                href="/allCustomer"
                                                class="btn btn-dark"
                                            >
                                                Go to Employees Management
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-white">
                                    <div class="card" style={{ width: "auto" }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                            class="card-img-top"
                                            alt="..."
                                            style={{ height: "300px" }}
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                Suppliers Management
                                            </h5>
                                            <p class="card-text">
                                                All the Suppliers details
                                            </p>
                                            <a
                                                href="/supplierH"
                                                class="btn btn-dark"
                                            >
                                                Go to Suppliers Management
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
