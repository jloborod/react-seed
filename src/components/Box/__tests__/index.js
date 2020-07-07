import React from "react";
import { shallow } from "enzyme";

import Box from "../index";

describe("<Box />", () => {
  it("renders correctly", () => {
    const child = <span>I am a child</span>;
    const wrapper = shallow(<Box>{child}</Box>)

    expect(wrapper).toMatchSnapshot();
  });
});