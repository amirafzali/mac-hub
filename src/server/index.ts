import express from 'express';

const app = express();


app.use('/api', require('./routes/sample-api.ts'));

app.listen(8080, () => console.log("Listening on 8080!"));
