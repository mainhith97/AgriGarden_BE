const express = require('express');
const router = express.Router();
const ProductController = require('../App/Controllers/Http/ProductController');

router.get('/get-list-product1', (req, res, next)=>{
    ProductController.getListProduct1({req, res, next});
});

router.get('/product/:id', (req, res, next)=>{
    ProductController.getProductbyId({req, res, next});
});

module.exports = router;