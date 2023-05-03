const express = require('express');
const app = express();
const data = require('./data/data.json');
var cors = require('cors')
require('dotenv').config()
const port = process.env.PORT

app.use(cors())


// NEW CODE
// when the server receives a GET request to '/'
app.get('/', (req, res) => {
    // send some text back as a response
    res.send(data);
});
// END OF NEW CODE

app.listen(port, () => {
    console.log('Server Started on', port);
    console.log('Press CTRL + C to stop server');
});
