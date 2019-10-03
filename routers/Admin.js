const express = require('express');
const router = express.Router();
const AdminController = require('../App/Controllers/Http/AdminController');
const AuthenMiddleware = require('../App/Middlewares/AuthMiddleware');


router.post('/login', (req, res, next)=>{
    AdminController.login({req, res, next});
});

//required authen
router.use((req, res, next)=>{
    AuthenMiddleware.auth({req, res, next});
});

router.get('/get-list-user', (req, res, next)=>{
    AdminController.getListUser({req, res, next});
});
router.get('/get-list-product', (req, res, next)=>{
    AdminController.getListProduct({req, res, next});
});
router.post('/logout', (req, res, next)=>{
    AdminController.logout({req, res, next});
});



module.exports = router;