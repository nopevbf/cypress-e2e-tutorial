import DATA from "../../../data/userData.js";

describe("Create User PetStore API Testing", () => {
  it("Post User", () => {
    cy.request({
      method: "POST",
      url: "/user",
      body: DATA.CREATE_USER,
    }).as("createUser");
    cy.get("@createUser").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("code", 200);
      expect(response.body).to.have.property("type", "unknown");
      expect(response.body).to.have.property("message");
    });
  });
});
