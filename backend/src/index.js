const express = require("express");
const cors = require("cors");
const { route } = require("./routes");

const app = express();

app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cors());
app.use(express.json());

app.use("/api/v1", route);

app.listen(3001);
