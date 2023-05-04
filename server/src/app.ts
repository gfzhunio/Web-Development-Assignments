require("dotenv").config();
import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
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
    res
      .status(404)
      .send({
        message:
          "Authentication failed: Please enter valid username or password",
      });
  }
});

app.post("/user", async (req: Request, res: Response) => {
  const { username, email, password, isAdmin = false } = req.body;

  const { insertedId } = await Collection.user.insertOne({
    username,
    email,
    password,
    isAdmin,
  });

  const user = await Collection.user.findOne({ _id: insertedId });

  res.send(user);
});

app.get("/user", async (req: Request, res: Response) => {
  const users = await Collection.user.find().toArray();

  for (const user of users) {
    user.user = await Collection.user.findOne({
      _id: new ObjectId(user.userId),
    });
  }
  res.send(users);
});

app.get("/workout", async (req: Request, res: Response) => {
  const workouts = await Collection.workout.find().toArray();

  for (const workout of workouts) {
    workout.user = await Collection.user.findOne({
      _id: new ObjectId(workout.userId),
    });
  }

  res.send(workouts);
});

app.get("/workout/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;

  const workouts = await Collection.workout.find({ userId }).toArray();

  for (const workout of workouts) {
    workout.user = await Collection.user.findOne({
      _id: new ObjectId(workout.userId),
    });
  }

  res.send(workouts);
});

app.post("/workout", async (req: Request, res: Response) => {
  const { typeOfWorkout, duration, location, userId } = req.body;

  const { insertedId } = await Collection.workout.insertOne({
    typeOfWorkout,
    duration,
    location,
    userId,
  });

  const workout = await Collection.workout.findOne({ _id: insertedId });

  res.send(workout);
});

app.delete("/workout/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const workout = await Collection.workout.findOne({ _id: new ObjectId(id) });

  await Collection.workout.deleteOne({ _id: new ObjectId(id) });

  res.send(workout);
});

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
