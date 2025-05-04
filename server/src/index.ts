import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config({
    path: "../../.env"
})

console.log(process.env)

// http://taaha.com -> http://backend.com
// backend.com has to allow taaha.com to use 
// *
// http://taaha.com (JS) -> 

const APP = express();

APP.use(cors(), express.json())

// CRUD
// Create
// Read
// Update
// Delete

// RESTful API
// REST

// Create -> PUT
// Read -> GET
// Update -> POST
// Delete -> DELETE

let array = [1, 2, 3];

APP.get("/api/test", async (request, response) => {
    response.status(200).send("Hello There!");
})

APP.get("/api/array", async (request, response) => {
    response.status(200).send("Here's an array:" + array);
})

APP.get("/api/json", async (request, response) => {
    response.status(200).send(
        {
            message: "OK",
            data: array
        }
    );
})

// CRUD
// Create
// Read
// Update
// Delete

// APP.put("/api/user") // Create
// APP.get("/api/user") // Read
// APP.post("/api/user") // Update
// APP.delete("/api/user") // Delete


APP.post("/post-test", async (request, response) => {
    const body: any[] = request.body;
    body.forEach((data) => {
        const { operation } = data;
        if (operation === "add") {
            const { value } = data;
            array.push(value)
            console.log(array)
        } else if (operation === "remove") {
            const { index } = data;
            console.log(index)
            array = array.filter((_, i) => i != index)
            console.log(array)
        }
    })
    console.log(body);
    response.status(200).send(array);
})

// APP.post("/test", async (request, response) => {
//     const data = await request.body
//     console.log(data)
// });

APP.listen(3001, () => {
    console.log("Backend starting on port 3001")
})