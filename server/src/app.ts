import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const workouts = [
  { workoutName: "A", duration: 1, }, 
  { workoutName: "B", duration: 2 }
];

app.get("/", (req, res) => {
  res.send({ hello: "World" });
});

app.get("/workout", (req, res) => {
  res.send(workouts);
});

app.post("/workout", (req: Request, res: Response) => {
  const workout = req.body;

  workouts.push(workout);

  res.send(workout);
});

app.delete("/workout/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const deletedWorkout = workouts.splice(id, 1)[0];

  res.send(deletedWorkout);
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
  console.log("Server listening on port 3000");
});
