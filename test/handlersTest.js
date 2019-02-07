const request = require("supertest");
const app = require("../src/app.js");
const { User, Users } = require("../entities/user");
const TODO = require("../entities/todo");

describe("GET /", function() {
  it("response with status code 200 if request for get / ", function(done) {
    request(app)
      .get("/")
      .expect(200)
      .expect("content-Type", /html/)
      .end(done);
  });

  it("response with status code 404 if request for /home.html ", function(done) {
    request(app)
      .get("/login.html")
      .expect(404)
      .end(done);
  });

  it("response with status code 200 if request for post / ", function(done) {
    request(app)
      .post("/")
      .expect(200)
      .expect("content-Type", /html/)
      .end(done);
  });
});

describe("post /signup", () => {
  it("response with status code 200 when post request is send with login parameters", function(done) {
    request(app)
      .post("/myToDo")
      .send(
        `userName=checkSignup&password=password&confirmPassword=confirmPassword`
      )
      .expect(200)
      .end(done);
  });
});

describe("post /submit", () => {
  it("response with status code 200  when post request is sent with signUp parameters", function(done) {
    request(app)
      .post("/submit")
      .expect(200)
      .end(done);
  });
});

describe("post /addToDo", () => {
  it("response with status code 200 for post request to /addToDo", function(done) {
    request(app)
      .post("/addToDo")
      .send({
        name: "testUser",
        title: "dummyTitle",
        description: "dummyDescription"
      })
      .expect(200)
      .end(done);
  });
});

describe("get /userDetail", () => {
  it("response with status code 200 for post request on /userDetail", function(done) {
    request(app)
      .post("/userDetail")
      .expect(200)
      .end(done);
  });
});

// describe("post /addItem", () => {
//   let user = new User("dummyUser");
//   let todo = new TODO("dummyTitle", "dummyDescription");
//   user.addToDo(todo);
//   it("response with status code 200 for post request on /addItem", function(done) {
//     request(app)
//       .post("/addItem")
//       .send({
//         name: "dummyUser]",
//         toDoId: "",
//         item: "dummyItem"
//       })
//       .expect(200)
//       .end(done);
//   });
// });

// describe("post /saveItems", () => {
//   it("response with status code 200 for post request on /saveItems", function(done) {
//     request(app)
//       .post("/saveItems")
//       .expect(200)
//       .end(done);
//   });
// });

// describe("post /deleteItem", () => {
//   it("response with status code 200 and for post request on /deleteItem", function(done) {
//     request(app)
//       .post("/deleteItem")
//       .expect(200)
//       .end(done);
//   });
// });

describe("post /deleteToDo", () => {
  it("response with status code 200 and for post request on /deleteToDo", function(done) {
    request(app)
      .post("/deleteToDo")
      .send({ name: "testUser", toDoId: "testId" })
      .expect(200)
      .end(done);
  });
});

describe("get /signUp", () => {
  it("response with status code 200 and for get request on /signUp", function(done) {
    request(app)
      .get("/signUp")
      .expect(200)
      .end(done);
  });
});
