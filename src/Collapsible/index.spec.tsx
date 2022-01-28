import { render, screen } from "@testing-library/react";
import Collapsible from ".";

describe("Collapsible", () => {
  describe("initially", () => {
    it("does not show the children", () => {
      render(
        <Collapsible title="Title">
          <div data-testid="children">children</div>
        </Collapsible>
      );
      expect(screen.queryByTestId("children")).not.toBeVisible();
    });
  });

  describe("after clicking the expand button", () => {
    it("shows the children", () => {
      render(
        <Collapsible title="Title">
          <div data-testid="children">children</div>
        </Collapsible>
      );
      screen.getByRole("button").click();
      expect(screen.queryByTestId("children")).toBeVisible();
    });
  });

  describe("after clicking the expand button twice", () => {
    it("does not show the children", () => {
      render(
        <Collapsible title="Title">
          <div data-testid="children">children</div>
        </Collapsible>
      );
      screen.getByRole("button").click();
      screen.getByRole("button").click();
      expect(screen.queryByTestId("children")).not.toBeVisible();
    });
  });
});
