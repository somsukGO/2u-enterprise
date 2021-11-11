const mongoose = require('mongoose');
const dbUri = 'mongodb://localhost:27017/strapi-2utms-service';

const connectDB = () => {
  mongoose
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log(`Connected to database ${result.connection.name}`))
    .catch((err) => console.log(`Can not connect to database ${err}`));
};

module.exports = connectDB;
