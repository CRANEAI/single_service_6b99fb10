
/*
signup view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

following view has an Image located at the top center of the view. this is a placeholder and should be updated with higher resolution Image
following view has Label located at the mid-top left of the view, text needs identified
following view has Label located at the main area left of the view, text needs identified
following view has Label located at the main area left of the view, text needs identified
following view has a Button located at the mid-bottom center of the view with text login
following view has a Label located at the bottom center of the view with text sign up
following view has Button located at the main area center of the view, text for button needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing
the signup view has a profile icon located at the very-top center of the view which on click will trigger the profile() action
the sign in view has a profile icon located at the very-top center of the view which on click will trigger the profile() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { sign_up_action }  from '../actions/signupActions.js'; 

        
        
       
        class signupView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // sign_up event
            sign_up = (value) => {
                const { sign_up_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        sign_up_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        				<Button className="btn "><!-- --></Button> 

			</Col>

			<Col md={12}>
				<p> sign up </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for login action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.login()}>login</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for sign_up action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.sign_up()}>sign up</Button> 

			</Col>


                           
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.signup
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ sign_up_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(signupView);
    
        