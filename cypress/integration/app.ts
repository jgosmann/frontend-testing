describe("App", () => {
  describe("initially", () => {
    it("does not show the React logo", () => {
      cy.visit("/");
      cy.get("img").should("not.be.visible");
    });
  });

  describe("when expanding the box", () => {
    it("shows the React logo", () => {
      cy.visit("/");
      cy.get("button").click();
      cy.get("img").should("be.visible");
    });
  });
});
