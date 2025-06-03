import express from "express";
import morgan from "morgan";
import 'ejs'

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.get("/note.txt", (req, res) => {
  res.send("Esto no es un archivo");
});

// app.get('/products', (req,res)=>{
//     res.send('lista de productos')
// })

// app.get('/weather', (req,res)=>{
//     res.send('weather')
// })

// app.use((req,res) => {
//     res.status(404).send('Error 404 page not found')
// })

// app.get('/products', (req,res)=>{
//     res.send('lista de productos')
//     // validar datos
//     // crear base de datos
//     // analizar datos
// })

// app.post('/products', (req,res)=>{
//     res.send('Creando productos')
// })

// app.put('/products', (req,res)=>{
//     res.send('Actualizando productos')
// })

// app.delete('/products', (req,res)=>{
//     res.send('Eliminando productos')
// })

// app.patch('/products', (req,res)=>{
//     res.send('actualizando una parte del productos')
// })

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/user", (req, res) => {
//   res.json({
//     name: "ryan",
//     lastname: "Doe",
//     age: 40,
//     points: [1, 2, 3],
//     address: { city: "New York", street: "some street 123" },
//   });
// });

// app.get("/isalive", (req, res) => {
//   res.sendStatus(204);
// });

// app.all('/info',(req,res) => {
//     res.send('server info')
// })

// app.get('/hello/:user',(req,res)=>{
//     let user = req.params.user
//     res.send(`Hello ${user}`)
// })

// app.get('/add/:x/:y',(req,res)=>{
//     let num1 = parseInt(req.params.x)
//     let num2 = parseInt(req.params.y)
//     let result = num1 + num2

//     res.send(`Hello ${result}`)
// })

// app.get('/user/:name/age/:age',(req,res)=>{
//     let user = req.params.name
//     let age = req.params.age
//     res.send(`El nombre del usuario es ${user} y su edad es ${age}`)
// })

// app.get('/profile',(req,res)=>{
//     res.send('Profile page')
// })

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(3000);
console.log("server listen on port 3000");
