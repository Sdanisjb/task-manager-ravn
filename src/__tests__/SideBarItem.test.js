import React from "react";
import { render, screen } from "@testing-library/react";

import { SideBarItem } from "../components/SideBarItem";

beforeEach(() => render(<SideBarItem />));

describe("Side Bar Item Mount", () => {
  it("must show an icon", () => {
    expect(
      screen.getByRole("icon", { name: "side-bar-icon" })
    ).toBeInTheDocument();
  });

  it("must show a label", () => {
    expect(screen.getByRole("label", { name: "side-bar-label" }));
  });
});
