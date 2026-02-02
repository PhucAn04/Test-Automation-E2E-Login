describe("Re-Login test", () => {
  it("Lần 2: Đăng nhập thành công với thông tin đúng", () => {
    cy.visit("https://lcms.ntt.edu.vn/login/index.php");
    cy.get("#username").should("be.visible");
    cy.get("#username").type("MSSV");
    cy.get("#password").type("PASSWORD");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/my");
    cy.screenshot("TrangChu");
  });
});
