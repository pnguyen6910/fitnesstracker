//npm packages
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const db = require("./models")

const PORT = process.env.PORT || 8080

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
})
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

const app = express()
app.use(express.urlencoded({
    ectend: true
}))
app.use(express.json())
app.use(express.static("public"))

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});