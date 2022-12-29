import React, { Component } from 'react'
import axios from 'axios';
import {BrowserRouter,Route} from 'react-router-dom';
import HomeA from './components/HomeA';
import HomeC from './components/HomeC';

// import NavBar from './components/NavBar';
import NavBar from './components/NavBar';
import CreateSupplier from './components/CreateSupplier';
import EditSupplier from './components/EditSupplier';
import SupplierHome from './components/SupplierHome';
import SupplierDetails from './components/SupplierDetails';




//reservation
import CreateRes from './components/CreateRes';
import EditRes from './components/EditRes';
import ResDetails from './components/ResDetails';
import ViewRes from './components/ViewRes';
import HomeRes from './components/HomeRes';


//customer
import allCustomer from './components/allCustomer';
import createCustomer from './components/createCustomer';
import editCustomer from './components/editCustomer';
import viewCustomer from './components/viewCustomer';

import customerDetails from './components/customerDetails';
import login from './components/login';


// finance
import BasicSalary from './components/finance/BasicSalary';
import EditBasicSalary from './components/finance/EditBasicSalary';
import CreateBasicSalary from './components/finance/CreateBasicSalary';
import IncomeExpenditure from './components/finance/IncomeExpenditure';
import EditIncomeExpenditure from './components/finance/EditIncomeExpenditure';
import CreateIncomeExpenditure from './components/finance/CreateIncomeExpenditure';

//feedback


import FeedbackHome from './components/Home'





import RestCreatePost from './components/RestCreatePost';
import RestEditPost from './components/RestEditPost';
import RestPostDetails from './components/RestPostDetails';

import RestAllDetails from './components/RestAllDetails';


//services


import ServiceDetails from './components/ServiceDetails';
import AllServices from './components/AllServices';



 

 export default class App extends Component{
  render() {
    return (
         <BrowserRouter>
           <div className="container">
 
                {/* <NavBar/> */}

                <Route path="/AdminHome" exact component={HomeA}></Route>
                

                {/* Supplier */}
                <Route path="/supplierH" exact component={SupplierHome}></Route>
                <Route path="/addsup" exact component={CreateSupplier}></Route>
                <Route path="/editsup/:id" exact component={EditSupplier}></Route>
                <Route path="/supplier/:id" exact component={SupplierDetails}></Route>
                

                
                <Route path="/addRes" exact component={CreateRes}></Route>
                <Route path="/editRes/:id" exact component={EditRes}></Route>
                <Route path="/Reserpost/:id" exact component={ResDetails}></Route>        
                <Route path="/vposts" exact component={ViewRes}></Route>
                <Route path="/hres" exact component={HomeRes}></Route>
                
                
                
                {/*Customer*/}
                <Route path= "/allCustomer" exact component={allCustomer}></Route>
                <Route path= "/register" component={createCustomer}></Route>
                <Route path= "/edit/:id" component={editCustomer}></Route>
                <Route path= "/customer/:id" component={viewCustomer}></Route>
                
                <Route path= "/customerDetails" component={customerDetails}></Route>
                <Route path= "/createCustomer" exact component={login}></Route>
                
                
        
                   
                
                
                
                
                
                
                {/* Finance */}
                <Route path="/finance/basicsalary" exact component={BasicSalary}></Route>
                <Route path="/finance/basicsalary/update/:id" exact component={EditBasicSalary}></Route>
                <Route path="/finance/basicsalary/create" exact component={CreateBasicSalary}></Route>
                <Route path="/finance/incomeexpenditure" exact component={IncomeExpenditure}></Route>
                <Route path="/finance/incomeexpenditure/update/:id" exact component={EditIncomeExpenditure}></Route>
                <Route path="/finance/incomeexpenditure/create" exact component={CreateIncomeExpenditure}></Route>

                {/*feedback*/}
                <Route path="/FeedbackHome" exact component={FeedbackHome}/>
                
                
                


                
                
                <Route path="/Restaurantadd" exact component={RestCreatePost}></Route>
                <Route path="/Restaurantedit/:id" exact component={RestEditPost}></Route>
                {/* <Route path="/Restaurantpost/:id" exact component={RestPostDetails}></Route> */}
                <Route path="/RestAllDetails" exact component={RestAllDetails}></Route>


                {/* Customer Home */}
                <Route path="/" exact component={HomeC}></Route>   


                {/* Services */}
                <Route path="/AllServices" exact component={AllServices}></Route>
                
                
                <Route path="/service/:id" component={ServiceDetails}></Route>



 

           </div>
         </BrowserRouter>
    
    )
  }
}