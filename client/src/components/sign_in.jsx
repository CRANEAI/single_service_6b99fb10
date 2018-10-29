
/*
sign in view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the sign up view has a status bar located at the very-top across the full width of the view
the sign up view has a Headline Label located at the top left of the view, correct text needs defined
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the top left of the view, text needs identified
sign up view has Label located at the mid-top left of the view, text needs identified
sign up view has Label located at the mid-top left of the view, text needs identified
sign up view has Label located at the main area left of the view, text needs identified
the sign up view has a Pager located at the main area left of the view, correct text needs defined
sign up view has Label located at the bottom center of the view, text needs identified
sign up view has Label located at the bottom center of the view, text needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { login_action, postLogin }  from '../actions/sign_inActions.js'; 

        
        
       
        class signinView extends React.Component {

            state = {
                 show_loading_indicator: false,
                username : '', 
password : '', 

            }
    
            
            // login event
            login = (value) => {
                const { login_action } = this.props
                        e.preventDefault()

                        let login_data      =  {};
				login_data.username   = this.state.username 
				login_data.password   = this.state.password 


                        //Dispatch action mapped to redux
                        login_action(login_data)
                        
                        
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

                        				{/*<!-- TODO: Confirm label text --> */}

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for \iup action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.\iup()}>\iup</Button> 

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
                    data: state.sign_in
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ login_action, postLogin  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(signinView);
    
        