import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default class ResDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/Res/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post,
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        const { Name, ID, Phone_No, Check_In, Check_Out, No_Of_Rooms } =
            this.state.post;

        return (
            <div className="container">
                <NavBar />
                <div style={{ marginTop: "20px" }}>
                    <h4>Order Name: {Name}</h4>
                    {/* <h4>{ID}</h4> */}
                    <hr />

                    <dl className="row">
                        <dt className="col-sm-3">Goods </dt>
                        <dd className="col-sm-9">{Name}</dd>

                        <dt className="col-sm-3">Quantity</dt>
                        <dd className="col-sm-9">{ID}</dd>

                        <dt className="col-sm-3">Cost</dt>
                        <dd className="col-sm-9">{Phone_No}</dd>

                        <dt className="col-sm-3">Requested Date</dt>
                        <dd className="col-sm-9">{Check_In}</dd>

                        <dt className="col-sm-3">Required Date</dt>
                        <dd className="col-sm-9">{Check_Out}</dd>

                        <dt className="col-sm-3">Number Of Suppliers</dt>
                        <dd className="col-sm-9">{No_Of_Rooms}</dd>
                    </dl>
                </div>

                <div className="container2">
                    <h1 style={{ color: "green" }}>Successfully Approved</h1>

                    <button
                        className="btn btn-success"
                        style={{
                            marginLeft: "13px",
                            borderRadius: "35px",
                            marginTop: "20px",
                        }}
                    >
                        <a
                            href="/supplierH"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontFamily: "monospace",
                            }}
                        >
                            Contact Supplier
                        </a>
                    </button>
                </div>
            </div>
        );
    }
}
