const request = require("supertest");
const app = require("./server");

// تست API اصلی (صفحه اصلی)
test("GET / باید متن مشخصی برگردونه", async () => {
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe("Hello, CI/CD with GitHub Actions!");
});

// تست API لیست کاربران
test("GET /users باید یک آرایه از کاربران برگردونه", async () => {
  const response = await request(app).get("/users");
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual([{ id: 1, name: "Ali" }, { id: 2, name: "Reza" }]);
});

