import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
  }
  render() {
    return (
      <form>
        <div>
          <label>Height</label>
          <input type="text" />
        </div>
      </form>
    );
  }
}

export default NewBoxForm;
