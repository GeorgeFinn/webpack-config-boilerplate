import React, {Component} from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "./Routes"
import "./nav.css"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    )
  }
}
