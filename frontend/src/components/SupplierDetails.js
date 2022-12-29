import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './NavBar';


export default class SupplierDetails extends Component {
	constructor(props){
		super(props);
		this.state={
			supplier:{}
		};
	}
	componentDidMount(){
		const id = this.props.match.params.id;

		axios.get(`http://localhost:8000/supplier/${id}`).then((res)=>{
			if(res.data.success){
				this.setState({
					supplier:res.data.supplier
				});
				console.log(this.state.supplier);
			}
		});
	}

	render() {
		const {SupplierName,SupplierAddress,SupplierEmail,SupplierContactNumber,CompanyWebsiteName,TradingSince,TypeOfBusiness,PaymentMethod} = this.state.supplier;

	  return (
		<div className = "container" >
		<NavBar/>
	   <div style={{marginTop:'100px'}}>
		   <h4>{SupplierAddress}</h4>
		   <hr/>
		   <dl className="row">
			   <dt className="col-sm-3">Company Name</dt>
			   <dd className="col-sm-9">{SupplierName}</dd>

			   <dt className="col-sm-3">Delivery Address</dt>
			   <dd className="col-sm-9">{SupplierEmail}</dd>

			   <dt className="col-sm-3">Purchase Order Reference</dt>
			   <dd className="col-sm-9">{SupplierContactNumber}</dd>

			   <dt className="col-sm-3">Quantity</dt>
			   <dd className="col-sm-9">{CompanyWebsiteName}</dd>

			   <dt className="col-sm-3">Goods Required Date</dt>
			   <dd className="col-sm-9">{TradingSince}</dd>

			   <dt className="col-sm-3">Description</dt>
			   <dd className="col-sm-9">{TypeOfBusiness}</dd>

			   <dt className="col-sm-3">Agreed Price (Rs.)</dt>
			   <dd className="col-sm-9">{PaymentMethod}</dd>
		   </dl>
		   <button type="button" className="btn btn-primary"><a href="/supplierH" style={{textDecoration:'none',color:'white'}}>&nbsp;Back</a></button>
	    </div>
		<br/><br/>
		<button className="brn btn-success"> <a href="#" style={{textDecoration:'none',color:'white'}}> Generate Advice Note </a></button>
		</div>
		
	  )
	  
	}
}

