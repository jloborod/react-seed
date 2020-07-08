import React from "react";

import Box from "../Box";

const FormHook = () => {
  const [state, setState] = React.useState({});

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Box>
      <Box>
        <form>
          <input
            type="text"
            name="name"
            className="input"
            value={state.name}
            onChange={handleChange}
          />
        </form>
      </Box>
    </Box>
  );
};

export default FormHook;
