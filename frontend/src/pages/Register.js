import React, { Component } from 'react'
import { Grid, GridContainer} from 'unsemantic'
import exploreWineCountry from "../img/explore-wine-country.jpg"

import { Route, NavLink } from 'react-router-dom'

import RegistrationDetails from '../components/RegistrationDetails.js'

//import MustardVines from "../img/mustard-vines.jpg"
 
// This needs to be decoupled into a component...

class Register extends Component {
  	constructor(props) {
		super(props)
		//console.log('v?', this.props.location.state.viz)
		//this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	render() {
    return (
      <div>

			<div className="smallHeader">
		  		<div className="titleInfo">
		  			<h1 className="pageTitle">Register</h1>
          		</div>
		  		<div className="hero-overlay"></div>
		  		<img src={ exploreWineCountry } alt="Explore the Wine Country" className="wineryImage" />
          	</div> 


          <div className="mainContent">
          
	          
	          
	          <div className="content">
	            <GridContainer>
	            	<Grid desktop="100">
	            	
	            	{ /* COMPONENTS GO HERE */ }
	            	<RegistrationDetails />


	            	</Grid>
	            </GridContainer>
	            </div>  
	          </div>     
       		</div> 
    );
  }
}
 
export default Register