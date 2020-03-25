import 'module-alias/register';
import 'reflect-metadata';
import { Server } from './bin/Application';
const server = new Server();

server.listen((port: number | string) => {
    console.log(`Server is listening on port: ${port} 🚀`);
});
