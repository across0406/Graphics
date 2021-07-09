'use strict';

import express from 'express';
import path from 'path';

const app = express();
const router = express.Router();
const __dirname = path.resolve();
const port = process.env.port || 13000;

app.use(express.static(__dirname + '/public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/page/main.html'));
});

app.use('/', router);

const server = app.listen(port, () => {
    console.log('Server on http://localhost:' + port);
});
