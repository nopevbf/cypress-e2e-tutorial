describe("Update User PetStore API Testing", () => {
  it("Update User", () => {
    cy.request({
      method: "PUT",
      url: "/user/nopevbf",
      body: {
        id: 0,
        username: "nopevbf",
        firstName: "Nope",
        lastName: "Vbf",
        email: "furimanjay@gmail.com",
        phone: "082298507500",
        userStatus: 1,
      },
    }).as("updateUser");
    cy.get("@updateUser").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("code", 200);
      expect(response.body).to.have.property("type", "unknown");
      expect(response.body).to.have.property("message");
    });
  });
});
