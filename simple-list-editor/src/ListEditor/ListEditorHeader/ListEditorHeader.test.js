import React from "react";
import { shallow } from "../../../enzyme";
import ListEditorHeader from "./ListEditorHeader";

describe("ListEditorHeader component", () => {
  it("should exist", () => {
    const wrapper = shallow(<ListEditorHeader />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should contain header title", () => {
    const wrapper = shallow(<ListEditorHeader headerTitle="Test Title" />);
    expect(wrapper.find("StyledH1").text()).toEqual("Test Title");
  });
});
