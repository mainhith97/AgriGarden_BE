const ProductService = require('../../Services/ProductService');
const AuthMiddeware = require('../../Middlewares/AuthMiddleware');

class ProductController {
    constructor(){
        this.productService = ProductService;
        this.authMiddeware = AuthMiddeware;
    }

    async getListProduct1({req, res, next}){
        const result = await this.productService.getListProduct1();
        return res.json(result);
    }
    
    async getProductbyId({req, res, next}){
        const result = await this.productService.getProductbyId(req.params.id);
        return res.json(result);
    }
}

module.exports = new ProductController();