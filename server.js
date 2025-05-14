const { WebsocketServer } = require('@y/websocket-server');

const port = process.env.PORT || 1234;
const host = process.env.HOST || '0.0.0.0';

const server = new WebsocketServer({ port, host });

console.log(`y-websocket server running on ${host}:${port}`);