const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let items = [];

// CRUD Routes
app.get('/items', (req, res) => res.json(items));
app.post('/items', (req, res) => {
  items.push(req.body);
  console.log(items)
  res.status(201).send('Item added');
});
app.put('/items/:index', (req, res) => {
  const { index } = req.params;
  if (items[index]) {
    items[index] = req.body;
    res.send('Item updated');
  } else {
    res.status(404).send('Item not found');
  }
});
app.delete('/items/:index', (req, res) => {
  const { index } = req.params;
  if (items[index]) {
    items.splice(index, 1);
    res.send('Item deleted');
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
