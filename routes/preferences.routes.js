const express = require("express");
const Router = express.Router();

const preferences_controller = require("../controllers/preferences.controller")

Router.post("/create", preferences_controller.create_preference);

Router.get("/data", preferences_controller.get_preference);

module.exports = Router;