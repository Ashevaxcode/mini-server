const express = require("express");
const path = require("path");
const mysql = require("mysql");
const BodyParser = require("body-parser");

const db = mysql.createConnection({
  host: "localhost",
  database: "mahasiswa",
  user: "asheva",
  password: "lolipopenak",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");

  //this for get or show data

  //show table content
  app.get("/", (req, res) => {
    const sql = "select * from tbl_mahasiswa";
    db.query(sql, (err, result) => {
      if (err) throw err;
      //if no error
      const users = JSON.parse(JSON.stringify(result));
      console.log(`hasil dari table --> `, users);
      res.render("index", { users: users, title: "XcodePro Academy" });
    });
  });

  //this is for insert data
  app.post("/tambah", (req, res) => {
    const sqlInsert = `INSERT INTO tbl_mahasiswa (npm,nama, kelas)values(default,'${req.body.nama}','${req.body.kelas}');`;
    db.query(sqlInsert, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });

  // delete
});

// document.addEventListener("click", function (e) {
//   console.log(e.target);
// });

const app = express();
//insert body parser
app.use(BodyParser.urlencoded({ extended: true }));

//load bootstrap
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use("/script", express.static(path.join(__dirname, "script/js")));

//set view engine
app.set("view engine", "ejs");
app.set("views", "views");

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views/index.html"));
// });

app.listen(5000, () => {
  console.log("server listening " + 5000);
});
