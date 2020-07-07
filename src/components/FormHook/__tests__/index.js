import React from "react";
import { shallow } from "enzyme";

import FormHook from "../index";

describe("<FormHook />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<FormHook />);

    expect(wrapper).toMatchSnapshot();
  })

  it("handles changes", () => {
    const wrapper = shallow(<FormHook />);
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