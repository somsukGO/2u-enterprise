require('dotenv').config();
const errorHandler = require('./middlewares/error_response');
const socketIO = require('socket.io');
const express = require('express');
const connectDB = require('./configs/database');
const morgan = require('morgan');
const productRouter = require('./routers/product_router');
const jobRouter = require('./routers/job_router');
const refuelRouter = require('./routers/refuel_router');
const vehicleRouter = require('./routers/vehicle_router');
const utils = require('./utils/utils');
var cors = require('cors');

// create folder
utils.createFolder();

const app = express();

connectDB();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRouter);
app.use('/jobs', jobRouter);
app.use('/refuels', refuelRouter);
app.use('/vehicles', vehicleRouter);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const server = app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));

//socketIO
const io = socketIO(server);

io.on('connection', function (socket) {
  id = socket.id;
  console.log('Connected id: ', id);

  socket.on('message', function (data) {
    try {
      console.log('message ' + data);
      io.emit('message', data);
    } catch (err) {
      console.log(err);
    }
  });

  socket.on('disconnect', function () {
    try {
      console.log('Disconnected id: ' + socket.id);
    } catch (err) {
      console.log(err);
    }
  });
});
