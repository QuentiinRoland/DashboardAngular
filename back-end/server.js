require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const customersRoutes = require("./routes/customers");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API en ligne 🚀" });
});


const PORT = process.env.PORT || 8080;
const API_URL = process.env.PUBLIC_API_URL;

app.listen(PORT, () =>
  console.log(`Serveur lancé sur http://localhost:${PORT}`)
);
