const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;
