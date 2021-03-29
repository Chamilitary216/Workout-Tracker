//Packages

const express = require ("express");
const mongoose = require ("mongoose");
const logger = require ("morgan");

const PORT = process.env.PORT || 3030;

const app = express();

app.use(logger("dev"));