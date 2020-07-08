import React from "react";

import Box from "../Box";

class Form extends React.Component {
  state = {};

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Box>
        <Box>
          <form>
            <input
              type="text"
              name="name"
              className="input"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </form>
        </Box>
        <Box>
          Hello
        </Box>
      </Box>
    );
  }
}

export default Form;
