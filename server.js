const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extend: true}));
app.use(express.static("public"));

// -------- Car list of JSON objects ------
let cars = [
    {id: 1, car: "Honda"}
];

let nextCarId = 2;


// -------- HTTP Get methods ------------

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index/index.html")
});

app.get("/API", (req, res) => {
    res.sendFile(__dirname + "/public/API/API.html")
});

app.get("/backend", (req, res) => {
    res.sendFile(__dirname + "/public/backend/backend.html")
});

app.get("/htmlPage", (req, res) => {
    res.sendFile(__dirname + "/public/htmlPage/htmlPage.html")
});

app.get("/cssPage", (req, res) => {
    res.sendFile(__dirname + "/public/cssPage/cssPage.html")
});

app.get("/jqueryPage", (req, res) => {
    res.sendFile(__dirname + "/public/jQueryPage/jqueryPage.html")
});

app.get("/cars", (req, res) => {
    res.send({data : cars})
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    res.send({data : car})
});

// ------- HTTP post methods ------

app.post("/cars", (req, res) => {
   const newCar = req.body;
   newCar.id = nextCarId++;
   cars.push(newCar);
   return res.send({data: newCar})
});

// ------- HTTP patch methods --------

app.patch("/cars/:id", (req, res)=> {
   cars = cars.map(car=>{
       if(car.id === Number(req.params.id)) {
           return { ...car, ...req.body, id: car.id};
       }
       return car;
   });
   return res.send({data: cars})
});

// ------- HTTP delete methods -------

app.delete("/cars/:id", (req, res) =>{
   cars = cars.filter(car => car.id !== Number(req.params.id));
   return res.send({data: cars});
});

app.listen(8080, (error) =>{
    if (error){
        console.log("Error running server!")
    }
    console.log("Server is running on port: ", 8080)
});