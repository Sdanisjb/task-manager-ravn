import React from "react";
import { render, screen } from "@testing-library/react";

import MasterSidebar from "../components/MasterSidebar";

beforeEach(() => render(<MasterSidebar />));

describe("Master Sidebar Mount", () => {
  it("must show two items", () => {
    expect(screen.getAllByLabelText("sidebaritem-container").length).toBe(2);
  });

  it("must show a 'dashboard' tag", () => {
    expect(screen.getByText("dashboard")).toBeInTheDocument();
  });

  it("must show a 'My Tasks' tag", () => {
    expect(screen.getByText("my tasks")).toBeInTheDocument();
  });

  it("must show an img with RAVN logo", () => {
    expect(screen.getByAltText("ravn-logo")).toBeInTheDocument();
  });
});

describe("check good practices", () => {
  it("must use a nav element", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
