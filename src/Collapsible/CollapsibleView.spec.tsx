import { render, screen } from "@testing-library/react";
import CollapsibleView from "./CollapsibleView";

describe("CollapsibleView", () => {
  describe("when the toggle button is clicked", () => {
    it("calls the `onToggle` callback", () => {
      const onToggle = jest.fn();
      render(<CollapsibleView onToggle={onToggle} />);
      screen.getByRole("button").click();
      expect(onToggle).toHaveBeenCalledTimes(1);
    });
  });
});
