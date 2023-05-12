describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#nombre").type("Galletas");
    cy.get("#descripcion").type("Galletas de chocolate con relleno de crema");
    cy.get("#guardar-button").click();
    cy.get("#resultado-div").should("contain", "Nombre:Galletas Descripcion:Galletas de chocolate con relleno de crema");
  });
});
