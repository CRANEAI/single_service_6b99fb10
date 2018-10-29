
/*
following view
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
the sign in view has a profile icon located at the very-top center of the view which on click will trigger the profile() action
the following view has a profile icon located at the very-top center of the view which on click will trigger the profile() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { sign_up_action, follow_action, follow_action }  from '../actions/followingActions.js'; 

        
        
       
        class followingView extends React.Component {

            state = {
                 show_loading_indicator: false,
                username : '', 
password : '', 

            }
    
            
            // sign_up event
            sign_up = (value) => {
                const { sign_up_action } = this.props
                        e.preventDefault()

                        let sign_up_data      =  {};
				sign_up_data.username   = this.state.username 
				sign_up_data.password   = this.state.password 


                        //Dispatch action mapped to redux
                        sign_up_action(sign_up_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // send event
            send = () => {
                
                 send = () => {
                    <!-- ToDo: define what send will do in the send component --> 
                 })
                    
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        let follow_data      =  {};
				follow_data.username   = this.state.username 
				follow_data.password   = this.state.password 


                        //Dispatch action mapped to redux
                        follow_action(follow_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        let follow_data      =  {};
				follow_data.username   = this.state.username 
				follow_data.password   = this.state.password 


                        //Dispatch action mapped to redux
                        follow_action(follow_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
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
                    data: state.following
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ sign_up_action, follow_action, follow_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(followingView);
    
        