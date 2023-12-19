import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();
router.get("/", (req, res) => {
  res.json(userService.getUsers);
});
router.get("/:id", (req, res) => {
  if (userService.findUserbyId(parseInt(req.body))) {
    res.json(userService.findUserbyId(parseInt(req.body)));
  } else {
    res.sendStatus(400);
  }
});
router.post("/", function (req, res) {
  const result = userService.saveData(req.body);
  res.send("Data is saved");
  if (result) {
  } else {
    res.status(400).send("User wasn't sent");
  }
});
router.delete("/:id", (req, res) => {
  const foundUser = userService.findUserbyId(req.body);

  if (foundUser) {
    userService.deleteData(req.body);
  } else {
    res.sendStatus(400);
  }
});
export { router };
