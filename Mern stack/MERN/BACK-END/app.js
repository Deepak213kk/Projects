const cors = require('cors');
const express = require('express');
const app = express();

// Use CORS
app.use(cors());

// Other middlewares like bodyParser
app.use(express.json());

require('./conn/conn');
const auth = require('./routes/auth.js');
const list = require('./routes/list.js');



app.get("/",(req,res) => {
    res.send("Hello World");
});
app.get("/api/v1/register",(req,res) => {
    res.send("Hello World");
});

app.use('/api/v1',auth);
app.use('/api/v2',list);
app.listen(3000, () => {
    console.log('Server Started');
});
