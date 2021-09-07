const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.json({ 'message': 'ok'});
})

app.listen(3000), () => {
    console.log("server has started at port 3000")
}