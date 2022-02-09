// express hello world server

import express from 'express';

const app = express();
console.log('foo');

app.get('/', (req: express.Request, res: express.Response) => {
    console.log(req.span)
    res.send('Hello World!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
