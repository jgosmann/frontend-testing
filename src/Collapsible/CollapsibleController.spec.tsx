import { render, screen } from "@testing-library/react";
import CollapsibleController, { RenderProps } from "./CollapsibleController";

const TestDisplay = ({ isExpanded, toggle }: RenderProps) => (
  <div>
    <div data-testid="isExpanded">{isExpanded ? "true" : "false"}</div>
    <button data-testid="toggle" onClick={toggle}>
      Toggle
    </button>
  </div>
);

describe("CollapsibleController", () => {
  describe("initially", () => {
    it("is collapsed", () => {
      render(<CollapsibleController render={TestDisplay} />);
      expect(screen.getByTestId("isExpanded")).toHaveTextContent("false");
    });
  });

  describe("after calling `toggle` the first time", () => {
    it("is expanded", () => {
      render(<CollapsibleController render={TestDisplay} />);
      screen.getByTestId("toggle").click();
      expect(screen.getByTestId("isExpanded")).toHaveTextContent("true");
    });
  });

  describe("after calling `toggle` twice", () => {
    it("is collapsed", () => {
      render(<CollapsibleController render={TestDisplay} />);
      screen.getByTestId("toggle").click();
      screen.getByTestId("toggle").click();
      expect(screen.getByTestId("isExpanded")).toHaveTextContent("false");
    });
  });
});
