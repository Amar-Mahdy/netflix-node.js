import app from "../app2.js";
import supertest from "supertest";

const request = supertest(app);




describe("POST /movie", () => {
    describe("given a title and director and release_date", () => {
      it("should respond with a 200 status code", async () => {
        const response = await request.post("/movie").send({
          title: "joo",
         director: "thr best",
         release_date: "02-01-1993"
        });
        expect(response.status).toBe(200);
      });
    });
  
    describe("If there is no title or director or release_date!", () => {
      it("if no title, directories or release sate set the status = 400", async () => {
        const response = await request
          .post("/movie")
          .send({});
        expect(response.status).toBe(400);
      });
    });
  });