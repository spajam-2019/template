import * as Express from 'express';
import { routerMain } from './routers/routerMain';
import * as SocketIo from 'socket.io';
import { Server } from "http";

const PORT = 3000;
const app = Express();
const http = new Server(app);
const io = SocketIo(http);

app.use(routerMain);

io.on("connection", socket => {
  console.log("a user connected");
});

const server = http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

export default server;