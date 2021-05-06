import { render, screen } from "@testing-library/react";
import App from "./App";

// import { configure, shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });

// import { shallow } from "enzyme";
import { mount } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;

  beforeEach(() => {
    // wrapper = shallow(<App />);
    wrapper = mount(<App />);
  });

  test("render the title of counter", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toContain("This is counter app");

    // const { getByText } = render(<App />);
    // const linkElement = getByText("This is counter app");
    // expect(linkElement).toBeInTheDocument();
  });

  test("render a button with text of 'increment'", () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("initial value of state in a dvi", () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("render the click event of decrement button and decrement counter value", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
