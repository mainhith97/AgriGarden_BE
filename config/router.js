const app = require('./app');

// const userRouter = require('../routers/User');

const farmerRouter = require('../routers/Farmer');
const authRouter = require('../routers/Auth');
const adminRouter = require('../routers/Admin');

const userPrefix = 'user';
const adminPrefix = 'admin';

//routers users
// app.use('/users', userRouter);

app.use(`/${userPrefix}`, authRouter);
app.use(`/${userPrefix}`, farmerRouter);
app.use(`/${adminPrefix}`, adminRouter);
