import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import MasterNavbar from "../components/MasterNavbar";

beforeEach(() => render(<MasterNavbar />));

describe("Master Navbar Mount", () => {
  it("must include an input field of type text", () => {
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });

  it("must include a form element", () => {
    expect(screen.getByRole("form", { name: "searchbox" })).toBeInTheDocument();
  });

  it("must include a bell and magnifying glass icon", () => {
    expect(screen.getByLabelText(/bell icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/magnifying icon/i)).toBeInTheDocument();
  });

  it("must include an img tag", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

describe("Delete button appeareance and functionality", () => {
  it("on input, must appear delete icon button", () => {
    const clearButton = screen.getByLabelText(/clear button/i);
    expect(clearButton).toBeNull();

    fireEvent.change(screen.getByPlaceholderText(/Search/i), {
      target: { value: "lorem ipsum" },
    });

    expect(
      screen.getByRole("button", { name: "clear button" })
    ).toBeInTheDocument();
  });

  it("when clicked clear button, input target value must be null", () => {
    const input = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(input, {
      target: { value: "Lorem ipsum dolor sit amet." },
    });

    fireEvent.click(screen.getByRole("button", { name: "clear button" }));

    expect(input.value).toBe("");
  });
});
