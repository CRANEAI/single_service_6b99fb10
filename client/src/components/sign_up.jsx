/*
sign up view
created by: FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the signup view has a status bar located at the very-top across the full width of the view
the signup view has a Headline Label with text sign up located at the top left of the view
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the top left of the view, text needs identified
signup view has a Label located at the top left of the view with text ryan hickman
signup view has Label located at the mid-top left of the view, text needs identified
signup view has a Label located at the mid-top left of the view with text ryan@ryan‘com
signup view has Label located at the main area left of the view, text needs identified
signup view has a Label located at the bottom center of the view with text | sign in.
signup view has Label located at the bottom center of the view, text needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing

*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col, Button, Input, InputGroup, InputGroupText } from "reactstrap"

import { sign_up_action } from "../actions/sign_upActions.js"

class signupView extends React.Component {
  state = {
    show_loading_indicator: false,
    name: "",
    email: "",
    password: ""
  }

  // sign_up event
  sign_up = value => {
    const { sign_up_action } = this.props
    e.preventDefault()

    let sign_up_data = {}
    sign_up_data.name = this.state.name
    sign_up_data.email = this.state.email
    sign_up_data.password = this.state.password

    //Dispatch action mapped to redux
    sign_up_action(sign_up_data)

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

  componentDidMount = () => {}

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12}>
            <Col md={12}>
              {/* <!-- TODO: Create unit test for sign_up action --> */}
              <Button
                className="btn btn-lg btn-block button-white-block"
                onClick={() => this.sign_up()}
              >
                sign up
              </Button>
            </Col>

            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-gray-white"
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  placeholder="name"
                />{" "}
              </InputGroup>{" "}
            </Col>

            <Col md={12}>
              <p> ryan hickman </p>
            </Col>

            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-gray-white"
                  value={this.state.email}
                  onChange={this.handleChange}
                  name="email"
                  placeholder="email"
                />{" "}
              </InputGroup>{" "}
            </Col>

            <Col md={12}>
              <p> ryan@ryan‘com </p>
            </Col>

            <Col md={12}>
              <InputGroup>
                {" "}
                <Input
                  className="form-group input-white-gray"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  placeholder="password"
                />{" "}
              </InputGroup>{" "}
            </Col>

            <Col md={12}>
              <p> ism—in </p>
            </Col>
          </Col>
        )}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.sign_up
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sign_up_action }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signupView)
