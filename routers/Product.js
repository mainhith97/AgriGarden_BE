const express = require('express');
const router = express.Router();
const ProductController = require('../App/Controllers/Http/ProductController');
const AuthenMiddleware = require('../App/Middlewares/AuthMiddleware');

//required authen
// router.use((req, res, next)=>{
//     AuthenMiddleware.auth({req, res, next});
// });

router.get('/get-list-product1', (req, res, next)=>{
    ProductController.getListProduct1({req, res, next});
});

router.get('/get-product-by-id', (req, res, next)=>{
    ProductController.getProductbyId({req, res, next});
});

module.exports = router;