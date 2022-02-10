import express from 'express';
import { a } from './a'

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    console.log(a)
    res.send('Hello ' + req.foo);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
