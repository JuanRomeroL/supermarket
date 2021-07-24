import React, { Component } from "react";

interface Props {
  className?: string;
}

class Sections extends Component<Props> {
  render() {
    return <div className={this.props.className}>This is sections</div>;
  }
}

export default Sections;
