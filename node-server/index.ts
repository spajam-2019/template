import * as Express from 'express';

const app = Express();
const http = require('http').Server(app);
const io = require("socket.io")(http);

app.get('/', (req: Express.Request, res: Express.Response) => {
  return res.send('Hello world.');
});

io.on("connection", function(socket: any) {
  console.log("a user connected");
});

const server = http.listen(3000, function() {
  console.log("listening on *:3000");
});

export default server;