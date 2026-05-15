const express = require("express");
const cors = require("cors");

const locationRoutes = require("./modules/locations/location.route");
const periodRoutes = require("./modules/periods/period.route");
const eventRoutes = require("./modules/events/event.route");
const characterRoutes = require("./modules/characters/character.route");
const searchRoutes = require("./modules/search/search.route");
const notFoundMiddleware = require("./middlewares/not-found.middleware");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Việt Sử Kí Số đang hoạt động",
    data: {
      name: "Viet Su Ki So Backend",
    },
  });
});

app.use("/api/locations", locationRoutes);
app.use("/api/periods", periodRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/search", searchRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
