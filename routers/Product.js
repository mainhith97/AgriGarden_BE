const express = require('express');
const router = express.Router();
const ProductController = require('../App/Controllers/Http/ProductController');

router.get('/get-list-product1', (req, res, next)=>{
    ProductController.getListProduct1({req, res, next});
});
router.get('/get-list-product2', (req, res, next)=>{
    ProductController.getListProduct2({req, res, next});
});
router.get('/get-list-product3', (req, res, next)=>{
    ProductController.getListProduct3({req, res, next});
});
router.get('/get-list-product4', (req, res, next)=>{
    ProductController.getListProduct4({req, res, next});
});
router.get('/get-list-product5', (req, res, next)=>{
    ProductController.getListProduct5({req, res, next});
});
router.get('/get-list-product6', (req, res, next)=>{
    ProductController.getListProduct6({req, res, next});
});
router.get('/get-list-product7', (req, res, next)=>{
    ProductController.getListProduct7({req, res, next});
});
router.get('/get-list-product8', (req, res, next)=>{
    ProductController.getListProduct8({req, res, next});
});

router.get('/product/:id', (req, res, next)=>{
    ProductController.getProductbyId({req, res, next});
});

router.post('/search', (req, res, next)=>{
    ProductController.search({req, res, next});
});
router.get('/search', (req, res, next)=>{
    ProductController.getSearchResult({req, res, next});
});
router.get('/get-list-newest', (req, res, next)=>{
    ProductController.getListNewest({req, res, next});
});

module.exports = router;