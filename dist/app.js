"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});
const port = 3005;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
