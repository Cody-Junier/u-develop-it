const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.use('/api', apiRoutes);


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});