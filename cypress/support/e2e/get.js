describe("Username PetStore API Testing", () => {
  it("Get Username", () => {
    cy.request("GET", "/user/nopevbf").as("getResponse");
    cy.get("@getResponse").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("username");
      expect(response.body).to.have.property("firstName");
      expect(response.body).to.have.property("lastName");
      expect(response.body).to.have.property("email");
      expect(response.body).to.have.property("password");
      expect(response.body).to.have.property("phone");
      expect(response.body).to.have.property("userStatus");
    });
  });
});
