const express = require("express");
const path = require("path");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  database: "mahasiswa",
  user: "asheva",
  password: "lolipopenak",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");

  //show table content
  const sql = "select * from tbl_mahasiswa";
  db.query(sql, (err, result) => {
    if (err) throw err;
    //if no error
    const users = JSON.parse(JSON.stringify(result));
    console.log(`hasil dari table --> `, users);
    app.get("/", (req, res) => {
      res.render("index", { users: users, title: "XcodePro Academy" });
    });
  });
});

const app = express();

//load bootstrap
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

//set view engine
app.set("view engine", "ejs");
app.set("views", "views");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/index.html"));
// });

app.listen(5000, () => {
  console.log("server listening " + 5000);
});
