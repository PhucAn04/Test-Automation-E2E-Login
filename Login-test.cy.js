describe("Login test", () => {
  it("Hiển thị thông báo lỗi khi sai mật khẩu", () => {
    cy.visit("https://lcms.ntt.edu.vn/login/index.php");
    cy.get("#username").should("be.visible");
    cy.get("#username").type("Ten-dang-nhap");
    cy.get("#password").type("Mat-khau");
    cy.get('button[type="submit"]').click();
    cy.get(".alert")
      .should("be.visible")
      .then(($alert) => {
        const alertText = $alert.text();
        cy.log("Thông báo lỗi khi đăng nhập sai: " + alertText);
      });
    cy.screenshot("ThongBaoSaiMatKhau");
  });
});
