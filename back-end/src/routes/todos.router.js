import { Router } from "express";
import db from "../../dbConfig";
const router = Router();

router.get("/", (req, res, next) => {
  db("todos")
    .select("id", "name", "is_completed", "start_time", "end_time")
    .then(todos => {
      res.json(todos);
    });
});

export default router;
