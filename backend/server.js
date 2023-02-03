// “express” is a lightweight web framework for Node.js. It also has the capability to support many middlewares which assist in making the code easier and shorter to write.
const express = require('express');
// “cors” is an acronym for Cross-Origin Resource Sharing. This package permits AJAX requests to access the resources from the remote hosts.
const cors = require('cors');
// “mongoose” is added to install the “mongoose” package. The mongoose package helps the Node server to interact with MongoDB in MERN stack development.
const mongoose = require('mongoose');
// Lastly, the “dotenv” package will load the environment variables from the “.env” to the “process.env” file. It also manages the database credentials in a collaborative environment.
const cookieSession = require("cookie-session");

http = require('http');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const { Server } = require('socket.io');

const server = http.createServer(app);

// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server
    , {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    }
)
// var io = require('socket.io').listen(server);
let interval;
io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });
});

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
};

app.use(
    cookieSession({
        name: "room-chat-session",
        secret: "COOKIE_SECRET", // should use as secret environment variable
        httpOnly: true
    })
);



// routes
require('./routes/index.route')(app);
app.get('/', (req, res) => {
    return res.send({ message: 'Welcome' })
})


const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB databse connection established successfully`);
})

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})