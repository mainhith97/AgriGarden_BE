const app = require('./app');

// const userRouter = require('../routers/User');

const authRouter = require('../routers/Auth');
const farmerRouter = require('../routers/Farmer');
const adminRouter = require('../routers/Admin');

const userPrefix = 'user';
const farmerPrefix = 'farmer';
const adminPrefix = 'admin';

//routers users
// app.use('/users', userRouter);
app.use(`/${userPrefix}`, authRouter);
app.use(`/${farmerPrefix}`, farmerRouter);
app.use(`/${adminPrefix}`, adminRouter);
