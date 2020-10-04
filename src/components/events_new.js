import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { PostEvent } from "../actions";

class EventsNew extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>hi</div>
      </React.Fragment>
    );
  }
}
// const mapDispatchToProps = { PostEvents };

export default connect(null, null)(EventsNew);
