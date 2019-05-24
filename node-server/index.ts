import * as Express from 'express';
import { routerMain } from './routers/routerMain';

const PORT = 3000;
const app = Express();
const http = require('http').Server(app);
const io = require("socket.io")(http);

app.use(routerMain);

io.on("connection", function (socket: any) {
  console.log("a user connected");
});

const server = http.listen(PORT, function () {
  console.log(`listening on *:${PORT}`);
});

export default server;