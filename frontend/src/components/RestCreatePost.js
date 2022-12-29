import React, { Component } from "react";
import axios from "axios";
import "./form.css";
import res1 from "../images/payment.jpg";
import NavBarCus from "./NavBarCus";
import { saveAs } from "file-saver";

export default class RestCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menue: "",
            name: "",
            address: "",
            mobile: "",
            date: "",
            aguest: "",
            cguest: "",
            notes: "",
            cardname: "",
            cno: null,
            expdate: "",
            cvv: "",
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    createAndDownloadPdf = () => {
        axios
            .post("/create-pdf", this.state)
            .then(() => axios.get("Recipt-pdf", { responseType: "blob" }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                });

                saveAs(pdfBlob, "newPdf.pdf");
            });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const {
            menue,
            name,
            address,
            mobile,
            date,
            aguest,
            cguest,
            notes,
            cardname,
            cno,
            expdate,
            cvv,
        } = this.state;

        const data = {
            menue: menue,
            name: name,
            address: address,
            mobile: mobile,
            date: date,
            aguest: aguest,
            cguest: cguest,
            notes: notes,
            cardname: cardname,
            cno: cno,
            expdate: expdate,
            cvv: cvv,
        };

        console.log(data);

        axios
            .post("http://localhost:8000/Restaurant/save", data)
            .then((res) => {
                if (res.data.success) {
                    alert("Payment successfully");
                    this.setState({
                        menue: "",
                        name: "",
                        address: "",
                        mobile: "",
                        date: "",
                        aguest: "",
                        cguest: "",
                        notes: "",
                        cardname: "",
                        cno: "",
                        expdate: "",
                        cvv: "",
                    });
                }
            });
    };

    render() {
        return (
            <html>
                <body>
                    <div className="container">
                        <NavBarCus />{" "}
                    </div>
                    <section
                        style={{
                            backgroundImage: `url(${res1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "auto",
                        }}
                    >
                        <div
                            className="col-md-8 mt-4 mx-auto"
                            style={{
                                backgroundImage: `url(${res1})`,
                                backgroundPosition: "auto",

                                backgroundSize: "cover",
                            }}
                        >
                            <form className="row" onSubmit={this.onSubmit}>
                                <div className="city" id="right">
                                    <div className="h1">
                                        <h1
                                            style={{
                                                fontFamily: "sans-serif",
                                                fontSize: "35px",
                                            }}
                                        >
                                            Payment Details
                                        </h1>
                                    </div>
                                    <br></br>
                                    <h1
                                        className="form-group1"
                                        style={{ fontFamily: "monospace" }}
                                    >
                                        Accepted Cards
                                    </h1>
                                    <br></br>
                                    <div
                                        className="form-group1"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        <label
                                            style={{
                                                marginBottom: "5px",
                                                fontSize: "17px",
                                                fontFamily: "monospace",
                                            }}
                                        >
                                            Name on the card
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            name="cardname"
                                            value={this.state.cardname}
                                            pattern="[a-z A-Z .]+"
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div
                                        className="form-group1"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        <label
                                            style={{
                                                marginBottom: "5px",
                                                fontSize: "17px",
                                                fontFamily: "monospace",
                                            }}
                                        >
                                            Card number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="eg: 1234 5678 7896 7458"
                                            name="cno"
                                            value={this.state.cno}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div
                                        className="form-group1"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        <label
                                            style={{
                                                marginBottom: "5px",
                                                fontSize: "17px",
                                                fontFamily: "monospace",
                                            }}
                                        >
                                            Expiry date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="expdate"
                                            name="expdate"
                                            value={this.state.expdate}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div
                                        className="form-group1"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        <label
                                            style={{
                                                marginBottom: "5px",
                                                fontSize: "17px",
                                                fontFamily: "monospace",
                                            }}
                                        >
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="3-digit number"
                                            name="cvv"
                                            pattern="[0-9]{3}"
                                            value={this.state.cvv}
                                            onChange={this.handleInputChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        id="btn1"
                                        type="submit"
                                        style={{
                                            marginTop: "20px",
                                            marginLeft: "80px",
                                            fontFamily: "monospace",
                                        }}
                                        onClick={this.createAndDownloadPdf}
                                        required
                                    >
                                        <i className="far fa-check-square"></i>
                                        &nbsp; Pay Now!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </body>
            </html>
        );
    }
}
