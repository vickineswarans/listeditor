import React from "react";
import { shallow } from "../../../enzyme";
import ListEditorFooter from "./ListEditorFooter";
import Button from "../../presentational/common/Button/Button";

describe("ListEditorFooter component", () => {
  it("should exists", () => {
    const wrapper = shallow(<ListEditorFooter />);
    expect(wrapper.exists()).toBe(true);
  });

  describe("Button inside ListEditorFooter", () => {
    it("should exist", () => {
      const wrapper = shallow(<ListEditorFooter />);
      expect(wrapper.find(Button).exists()).toBe(true);
    });

    it("should have correct props", () => {
      const wrapper = shallow(<ListEditorFooter />);
      expect(wrapper.find(Button).props().name).toEqual("Apply");
      expect(wrapper.find(Button).props().buttonType).toEqual("secondary");
    });
  });
});
