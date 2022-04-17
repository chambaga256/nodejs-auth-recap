const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("tiny"));


