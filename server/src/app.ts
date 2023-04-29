require("dotenv").config();
import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { Collection } from "./database";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const workouts = [
  { workoutName: "A", duration: 1 },
  { workoutName: "B", duration: 2 },
];

app.get("/", (req, res) => {
  res.send({ hello: "World" });
});

app.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await Collection.user.findOne({ username, password });

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "Could not find user" });
  }
});

app.post("/user", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const { insertedId } = await Collection.user.insertOne({
    username,
    email,
    password,
  });

  const user = await Collection.user.findOne({ _id: insertedId });

  res.send(user);
});

app.get("/workout", (req: Request, res: Response) => {
  res.send({ hello: 1 });
});

app.post("/workout", (req: Request, res: Response) => {
  const workout = req.body;

  workouts.push(workout);

  res.send(workout);
});

app.delete("/workout/:id", (req: Request, res: Response) => {});

app.patch("/workout/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const changes = req.body;

  const currentWorkout = workouts[id];

  const newWorkout = { ...currentWorkout, ...changes };
  workouts[id] = newWorkout;

  res.send(newWorkout);
});

app.listen(3000, () => {
  console.log("Server running on 3000!");
});
