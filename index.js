const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
//DB URL||URI
const CONNECTION_URL =
  "mongodb+srv://somesh:W47S2f0umd3voqOv@cluster0.kyardxm.mongodb.net/?retryWrites=true&w=majority";

//Connection Part
mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true },
  () => console.log("Connected to Database")
);

if(process.env.NODE_ENV ==='production') {

    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
     
        res.sendFile(path.resolve(__dirname , 'client' , 'build', 'index.html'));

    });
}
//Routers
const create = require("./router/create.js");
const get = require("./router/get.js");
const update = require("./router/update.js");
const deletes = require("./router/delete.js");

//API
app.use("/create", create);
app.use("/get", get);
app.use("/update", update);
app.use("/delete", deletes);

app.listen(5000, () => console.log("Running on port 5000"));














