const express = require("express");
const morgan = require("morgan");
app.set('name','curso de express')

const app = express();
app.use(express.json());

app.use(morgan("dev"));
let products = [
  {
    name: "Harina",
    price: 50,
    id: 1,
  },
];
app.get("/products", (req, res) => {
  res.send(products);
});

app.post("/products", (req, res) => {
  products.push({ ...req.body, id: products.length + 1 });
  res.send(products);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const newProduct = req.body;
  if (id > products.length) {
    res.status(404).send("No se encontro el producto");
  }

  // products.splice(products[id - 1],1,{...newProduct,id:id});

  products.map(p => p.id === id ? {...p, ...newProduct} : p)
});

app.delete("/products/:id", (req, res) => {
  const productFound = products.find((product) => {
    return product.id === parseInt(req.params.id);
  });
  if (!productFound) {
    res.sendStatus(404).send("No se encontro el producto");
  }
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  const productFound = products.find((product) => {
    return product.id === parseInt(req.params.id);
  });
  if (!productFound) return res.status(404).send("No se encontro el producto");
  else {
    res.json(productFound);
  }
});

app.listen(3000);
console.log(`Server ${app.get('name')} runing on por 3000`);
