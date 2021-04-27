import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/log', (req, res) => {
  const write = fs.createWriteStream(`${path.resolve('logs')}/access.log`, { flags: 'a' });
  write.on('open', () => {
    write.write(`Access: ${Date()}, IP: ${req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for']} || ${req.connection.remoteAddress}\n`);
  })
    .on('error', (err) => console.log(err));
  res.sendStatus(200);
});

router.get('/lines', (req, res) => {
  const buffer = fs.readFileSync(`${path.resolve('logs')}/access.log`);
  res.send({ length: buffer.toString().split('\n').length - 1 });
});

module.exports = router;
