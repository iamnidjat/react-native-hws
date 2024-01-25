import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import MainScreen from "../../src/screens/MainScreen";

describe("<App />", () => {
  it("has 3 childs", () => {
    const tree = renderer
      .create(<MainScreen />)
      .toJSON() as ReactTestRendererJSON;
    expect(tree!.children!.length).toBe(3);
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<MainScreen />);
    expect(getByTestId("mainView")).toBeTruthy();
    expect(getByTestId("mainTextView")).toBeTruthy();
    expect(getByTestId("mainTextView2")).toBeTruthy();
    expect(getByTestId("buttonsView")).toBeTruthy();
    expect(getByTestId("incrementButton")).toBeTruthy();
    expect(getByTestId("decrementButton")).toBeTruthy();
  });

  it("changes state on a button click", () => {
    const { getByTestId } = render(<MainScreen />);
    const textView = getByTestId("mainTextView2");
    const button1 = getByTestId("incrementButton");
    const button2 = getByTestId("decrementButton");

    expect(textView.props.children).toBe('');

    fireEvent.press(button1);
    expect(textView.props.children).toBe('Increment button clicked');
  
    fireEvent.press(button2);
    expect(textView.props.children).toBe('Decrement button clicked'); 
  });
});