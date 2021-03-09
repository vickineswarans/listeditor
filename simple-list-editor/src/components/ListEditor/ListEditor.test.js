import React from "react";
import { shallow } from "../../enzyme";
import ListEditor from "./ListEditor";
import ListEditorHeader from "./ListEditorHeader/ListEditorHeader";
import ListEditorFooter from "./ListEditorFooter/ListEditorFooter";
import List from "../../components/presentational/common/List/List";
import Button from "../../components/presentational/common/Button/Button";

describe("ListEditor component", () => {
  const listEditorData = {
    headerTitle: "Sample List Editor",
    options: ["Field1", "Field2", "Field3"],
    optionsLabel: "Available Fields",
  };

  it("should exists", () => {
    const wrapper = shallow(
      <ListEditor
        HeaderTitle={listEditorData.headerTitle}
        options={listEditorData.options}
        optionsLabel={listEditorData.optionsLabel}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it("should set correct props to ListEditorHeader component", () => {
    const wrapper = shallow(
      <ListEditor
        HeaderTitle={listEditorData.headerTitle}
        options={listEditorData.options}
        optionsLabel={listEditorData.optionsLabel}
      />
    );
    expect(wrapper.find(ListEditorHeader).props().headerTitle).toEqual(
      listEditorData.headerTitle
    );
  });

  describe("Available and selected options in List components", () => {
    it("should set correct props to List component where available options displayed", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );
      expect(wrapper.find(List).at(0).props().labelName).toEqual(
        listEditorData.optionsLabel
      );
      expect(wrapper.find(List).at(0).props().options).toEqual(
        listEditorData.options
      );
      expect(wrapper.find(List).at(0).props().name).toEqual("availableFields");
    });

    it("should set button named ( > Use ) enabled when one of available options in List is clicked", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(0).props().name
      ).toEqual("> Use");

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(0).props().disable
      ).toEqual(true);

      wrapper.find(List).at(0).props().handleClick({ target: {} });

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(0).props().disable
      ).toEqual(false);
    });

    it("should set button named ( > Use ) enabled when one of available options in List is changed", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(0).props().name
      ).toEqual("> Use");

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(0).props().disable
      ).toEqual(true);

      wrapper.find(List).at(0).props().handleChange({ target: {} });

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(0).props().disable
      ).toEqual(false);
    });

    it("should set correct props to List component where selected options displayed", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );
      expect(wrapper.find(List).at(1).props().labelName).toEqual(
        "Selected Fields"
      );
      expect(wrapper.find(List).at(1).props().options).toEqual([]);
      expect(wrapper.find(List).at(1).props().name).toEqual("selectedFields");
    });

    it("should set button named ( < Remove ) enabled when one of selected options in List is clicked", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(1).props().name
      ).toEqual("< Remove");

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(1).props().disable
      ).toEqual(true);

      wrapper
        .find(List)
        .at(1)
        .props()
        .handleClick({ target: { value: "Field1" } });

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(1).props().disable
      ).toEqual(false);
    });

    it("should set button named ( < Remove ) enabled when one of selected options in List is changed", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(1).props().name
      ).toEqual("< Remove");

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(1).props().disable
      ).toEqual(true);

      wrapper
        .find(List)
        .at(1)
        .props()
        .handleChange({ target: { value: "Field1" } });

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(1).props().disable
      ).toEqual(false);
    });
  });

  describe("Move from available options to selected options", () => {
    it("should move the clicked available option to selected fields when use button is clicked", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );

      wrapper
        .find(List)
        .at(0)
        .props()
        .handleClick({ target: { value: "Field1" } });

      expect(
        wrapper.find("StyledButtonsWrapper").find(Button).at(0).props().name
      ).toEqual("> Use");

      wrapper
        .find("StyledButtonsWrapper")
        .find(Button)
        .at(0)
        .props()
        .handleClick();

      expect(wrapper.find(List).at(1).props().options).toEqual(["Field1"]);
      expect(wrapper.find(List).at(0).props().options).toEqual([
        "Field2",
        "Field3",
      ]);
    });
  });

  describe("Move from selected options to available options", () => {
    it("should move back to available options from selected option when remove button is clicked", () => {
      const wrapper = shallow(
        <ListEditor
          HeaderTitle={listEditorData.headerTitle}
          options={listEditorData.options}
          optionsLabel={listEditorData.optionsLabel}
        />
      );

      wrapper
        .find(List)
        .at(0)
        .props()
        .handleClick({ target: { value: "Field2" } });

      wrapper
        .find("StyledButtonsWrapper")
        .find(Button)
        .at(0)
        .props()
        .handleClick();

      wrapper
        .find(List)
        .at(0)
        .props()
        .handleClick({ target: { value: "Field3" } });

      wrapper
        .find("StyledButtonsWrapper")
        .find(Button)
        .at(0)
        .props()
        .handleClick();

      wrapper
        .find(List)
        .at(1)
        .props()
        .handleClick({ target: { value: "Field2" } });

      wrapper
        .find("StyledButtonsWrapper")
        .find(Button)
        .at(1)
        .props()
        .handleClick();

      expect(wrapper.find(List).at(0).props().options).toEqual([
        "Field1",
        "Field2",
      ]);
      expect(wrapper.find(List).at(1).props().options).toEqual(["Field3"]);
    });
  });

  it("should contain ListEditorFooter component", () => {
    const wrapper = shallow(
      <ListEditor
        HeaderTitle={listEditorData.headerTitle}
        options={listEditorData.options}
        optionsLabel={listEditorData.optionsLabel}
      />
    );
    expect(wrapper.find(ListEditorFooter).exists()).toEqual(true);
  });
});
