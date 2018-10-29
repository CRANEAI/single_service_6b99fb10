
/*
signup view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the signup view has a status bar located at the very-top across the full width of the view
the signup view has a Headline Label located at the top left of the view, correct text needs defined
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the mid-top left of the view, text needs identified
signup view has Label located at the mid-top left of the view, text needs identified
signup view has Label located at the main area left of the view, text needs identified
the signup view has a Pager located at the main area left of the view, correct text needs defined
signup view has Label located at the bottom center of the view, text needs identified
signup view has Label located at the bottom center of the view, text needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing

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

                        				{/*<!-- TODO: Confirm label text --> */}

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for ﬂ action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.ﬂ()}>ﬂ</Button> 

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
    
        