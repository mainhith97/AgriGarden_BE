const express = require('express');
const router = express.Router();
const FarmerController = require('../App/Controllers/Http/FarmerController');
const AuthenMiddleware = require('../App/Middlewares/AuthMiddleware');

const { validationResult } = require('express-validator');

const registerValidator = require('../App/Validators/registerValidator');

// router register
router.post('/farmer_register', registerValidator, (req, res, next)=>{

    const errors = validationResult(req);
    console.log(errors);
    FarmerController.register({req, res, next});
});

//required authen
// router.use((req, res, next)=>{
//     AuthenMiddleware.auth({req, res, next});
// });

router.post('/logout', (req, res, next)=>{
    FarmerController.logout({req, res, next});
});



module.exports = router;