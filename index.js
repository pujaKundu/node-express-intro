const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Shutup and Go away!Kojoh");
});

const users = [
  {
    id: 0,
    name: "Shabana",
    email: "Shabana@gmail.com",
    phone: "01700000000",
  },
  {
    id: 1,
    name: "Shabana",
    email: "Shabana@gmail.com",
    phone: "01700000000",
  },
  {
    id: 2,
    name: "Shabana",
    email: "Shabana@gmail.com",
    phone: "01700000000",
  },
  {
    id: 3,
    name: "Black widow",
    email: "Shabana@gmail.com",
    phone: "01700000000",
  },
  {
    id: 4,
    name: "Emma",
    email: "Shabana@gmail.com",
    phone: "01700000000",
  },
];

app.get("/users", (req, res) => {
  //url :: localhost:8000/users?search=mita
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Fazli aam");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
