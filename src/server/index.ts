import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use('/api', require('./routes/log.ts'));

app.use('/api', (req, res) => res.redirect('/'));

app.listen(8080, () => console.log("Listening on 8080!"));
