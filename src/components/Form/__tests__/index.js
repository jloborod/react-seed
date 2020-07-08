import React from "react";
import { shallow } from "enzyme";

import Form from "../index";
import Box from "../../Box/index";

describe("<Form />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Form />);

    expect(wrapper).toMatchSnapshot();
  })

  it("handles changes", () => {
    const wrapper = shallow(<Form />);
    const name = "name";
    const value = "Juan";
    const event = {
      target: {
        name,
        value
      }
    };

    wrapper.find(".input").simulate("change", event);

    expect(wrapper.find(".input").prop("name")).toBe(name);
    expect(wrapper.find(".input").prop("value")).toBe(value);
  })
});