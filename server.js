const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require("./Develop/routes/apiRoutes");
app.use(apiRoutes);
const htmlRoutes = require("./Develop/routes/htmlRoutes");
app.use(htmlRoutes);

app.listenerCount(PORT, () => console.log(`Listening on PORT: ${PORT}`));