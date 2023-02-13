describe("PetStore Login API Testing", () => {
  it("Login", () => {
    cy.request({
      method: "GET",
      url: "/user/login?username=nopevbf&password=123456",
    }).as("login");
    cy.get("@login").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("code", 200);
      expect(response.body).to.have.property("type", "unknown");
      expect(response.body).to.have.property("message");
    });
  });
  it("Logout", () => {
    cy.request({
      method: "GET",
      url: "/user/logout",
    }).as("logout");
    cy.get("@logout").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("code", 200);
      expect(response.body).to.have.property("type", "unknown");
      expect(response.body).to.have.property("message");
    });
  });
});
