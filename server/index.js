const express = require('express');
const urouter=require("./routes/producetRouter.js")
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(urouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
