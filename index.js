const express = require('express');
const app = express();
const data = require('./data/data.json');
var cors = require('cors')

app.use(cors())


// NEW CODE
// when the server receives a GET request to '/'
app.get('/', (req, res) => {
    // send some text back as a response
    res.send(data);
});
// END OF NEW CODE

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});
