import React from "react";
import { render, screen } from "@testing-library/react";

import SideBarItem from "../components/SideBarItem";

beforeEach(() =>
  render(<SideBarItem icon="dashboard" labelText="dashboard" />)
);

describe("Side Bar Item Mount", () => {
  it("must show an icon", () => {
    expect(screen.getByLabelText("sidebar-icon")).toBeInTheDocument();
  });

  it("must show a label", () => {
    expect(screen.getByLabelText("sidebar-label")).toBeInTheDocument();
  });

  it("all elements must be in a wrapped component", () => {
    expect(screen.getByLabelText("sidebar-container")).toBeInTheDocument();
  });
});
