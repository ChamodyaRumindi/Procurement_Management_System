import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default class EditRes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            ID: "",
            Phone_No: "",
            Check_In: "",
            Check_Out: "",
            No_Of_Rooms: "",
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;

        const { Name, ID, Phone_No, Check_In, Check_Out, No_Of_Rooms } =
            this.state;

        const data = {
            Name: Name,
            ID: ID,
            Phone_No: Phone_No,
            Check_In: Check_In,
            Check_Out: Check_Out,
            No_Of_Rooms: No_Of_Rooms,
        };

        console.log(data);

        axios.put(`/Res/update/${id}`, data).then((res) => {
            if (res.data.success) {
                alert("updated successfully");
                this.setState({
                    Name: "",
                    ID: "",
                    Phone_No: "",
                    Check_In: "",
                    Check_Out: "",
                    No_Of_Rooms: "",
                });
            }
        });
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/Res/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    //post:res.data.post

                    Name: res.data.post.Name,
                    ID: res.data.post.ID,
                    Phone_No: res.data.post.Phone_No,
                    Check_In: res.data.post.Check_In,
                    Check_Out: res.data.post.Check_Out,
                    No_Of_Rooms: res.data.post.No_Of_Rooms,
                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
            <div className="container">
                <NavBar />
                <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">
                        Edit Requisition
                    </h1>
                    <form className="needs-validation" onSubmit={this.onSubmit}>
                        <div
                            className="form-group"
                            style={{ marginBottom: "15px" }}
                        >
                            <label style={{ marginBottom: "5px" }}>Goods</label>
                            <input
                                type="text"
                                className="form-control"
                                name="Name"
                                placeholder="Enter Goods"
                                value={this.state.Name}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div
                            className="form-group"
                            style={{ marginBottom: "15px" }}
                        >
                            <label style={{ marginBottom: "5px" }}>
                                Quantity
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="ID"
                                placeholder="Enter Quantity"
                                value={this.state.ID}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div
                            className="form-group"
                            style={{ marginBottom: "15px" }}
                        >
                            <label style={{ marginBottom: "5px" }}>Cost</label>
                            <input
                                type="text"
                                className="form-control"
                                name="Phone_No"
                                placeholder="Enter Cost"
                                value={this.state.Phone_No}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div
                            className="form-group"
                            style={{ marginBottom: "15px" }}
                        >
                            <label style={{ marginBottom: "5px" }}>
                                Requested Date
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                name="Check_In"
                                placeholder="Enter Requested Date"
                                value={this.state.Check_In}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div
                            className="form-group"
                            style={{ marginBottom: "15px" }}
                        >
                            <label style={{ marginBottom: "5px" }}>
                                Required Date
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                name="Check_Out"
                                placeholder="Enter Required Date"
                                value={this.state.Check_Out}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div
                            className="form-group"
                            style={{ marginBottom: "15px" }}
                        >
                            <label style={{ marginBottom: "5px" }}>
                                Number Of Suppliers
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="No_Of_Rooms"
                                placeholder="Enter Number Of Suppliers"
                                value={this.state.No_Of_Rooms}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <button
                            className="btn btn-success"
                            type="submit"
                            style={{ marginTop: "15px" }}
                        >
                            <i className="far fa-check-square"></i>
                            &nbsp; Update
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
