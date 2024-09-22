const express = require('express');
const uploadRoutes = require('./routes/uploadRoutes');
const jsonRoutes = require('./routes/jsonRoutes')
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/', uploadRoutes);
app.use('/', jsonRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
