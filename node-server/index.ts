import * as Express from 'express';

const PORT = 3000;
const app = Express();
const http = require('http').Server(app);
const io = require("socket.io")(http);

app.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('Hello world.');
});

app.get('/json', (req: Express.Request, res: Express.Response) => {
  class ResponseData {
    num: Number;
    constructor(num: Number) {
      this.num = num;
    }
  }
  return res.send(new ResponseData(2));
});

io.on("connection", function (socket: any) {
  console.log("a user connected");
});

const server = http.listen(PORT, function () {
  console.log(`listening on *:${PORT}`);
});

export default server;