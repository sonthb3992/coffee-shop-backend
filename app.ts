import express = require("express");

const app = express();

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

const port = 7000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

    console.log("here");
});


