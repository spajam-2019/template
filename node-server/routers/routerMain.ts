
import * as Express from 'express';

export const routerMain = Express.Router();

routerMain.get('/', (req: Express.Request, res: Express.Response) => {
    return res.send('Hello world.');
});

routerMain.get('/json', (req: Express.Request, res: Express.Response) => {
    class ResponseData {
        num: Number;
        constructor(num: Number) {
            this.num = num;
        }
    }
    return res.send(new ResponseData(2));
});

