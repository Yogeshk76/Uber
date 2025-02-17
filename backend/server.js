const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const app = require('./app');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

server.listen(3000);