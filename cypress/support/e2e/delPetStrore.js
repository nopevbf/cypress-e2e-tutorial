describe("Delete PetStore API Testing", () => {
  it("Delete User", () => {
    cy.request({
      method: "DELETE",
      url: "/user/nopevbf",
    }).as("deleteUser");
    cy.get("@deleteUser").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("code", 200);
      expect(response.body).to.have.property("type", "unknown");
      expect(response.body).to.have.property("message");
    });
  });
});
